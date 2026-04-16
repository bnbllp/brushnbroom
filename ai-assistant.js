/**
 * AI Assistant for Brush & Broom LLP
 * Provides intelligent service recommendations and customer support
 */

class BrushBroomAIAssistant {
  constructor() {
    this.conversationHistory = [];
    this.userProfile = {
      serviceNeeds: [],
      propertySize: null,
      budget: null,
      timeline: null,
      concerns: []
    };
  }

  /**
   * Analyze user input and provide intelligent recommendations
   */
  analyzeUserInput(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    const response = {
      message: '',
      recommendations: [],
      suggestedService: null,
      followUpQuestions: []
    };

    // Detect service interests
    if (lowerMessage.includes('clean') || lowerMessage.includes('dirty') || lowerMessage.includes('mess')) {
      response.recommendations.push('house-cleaning');
      if (lowerMessage.includes('move') || lowerMessage.includes('vacant') || lowerMessage.includes('turnover')) {
        response.suggestedService = 'move-out-cleaning';
        response.message = "It sounds like you might need our move-out cleaning service. This is perfect for renters, landlords, and turnovers when the place needs to look clean and ready for the next person.";
      } else if (lowerMessage.includes('deep') || lowerMessage.includes('thorough')) {
        response.suggestedService = 'deep-cleaning';
        response.message = "You're looking for a deep clean! We specialize in thorough cleaning that goes beyond the basics—kitchens, bathrooms, floors, baseboards, and all the details you actually notice.";
      } else {
        response.suggestedService = 'house-cleaning';
        response.message = "We'd love to help with your cleaning needs. Whether it's regular maintenance, deep cleaning, or a reset clean, we focus on doing it right.";
      }
      response.followUpQuestions.push('How many bedrooms and bathrooms does your home have?');
      response.followUpQuestions.push('When would you like the cleaning done?');
    }

    if (lowerMessage.includes('paint') || lowerMessage.includes('color') || lowerMessage.includes('refresh') || lowerMessage.includes('tired')) {
      response.recommendations.push('painting');
      response.suggestedService = 'interior-painting';
      response.message = "Interior painting is a great way to refresh tired rooms! We handle walls, trim, doors, touch-ups, and full-room repaints with clean lines and smooth finishes.";
      response.followUpQuestions.push('How many rooms are you looking to paint?');
      response.followUpQuestions.push('Do you have a timeline in mind?');
    }

    if (lowerMessage.includes('both') || (lowerMessage.includes('clean') && lowerMessage.includes('paint'))) {
      response.recommendations = ['house-cleaning', 'painting'];
      response.suggestedService = 'combined-service';
      response.message = "Perfect! We can handle both cleaning and painting as one coordinated project. This saves you the hassle of juggling multiple companies and ensures everything flows smoothly.";
      response.followUpQuestions.push('What\'s your approximate square footage?');
      response.followUpQuestions.push('What\'s your budget range?');
    }

    // Detect urgency
    if (lowerMessage.includes('urgent') || lowerMessage.includes('asap') || lowerMessage.includes('emergency') || lowerMessage.includes('soon')) {
      response.followUpQuestions.push('How soon do you need this completed?');
    }

    // Detect budget concerns
    if (lowerMessage.includes('budget') || lowerMessage.includes('afford') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      response.message += ' We offer transparent pricing with no hidden fees. Would you like to use our pricing estimator for a quick estimate?';
    }

    // Detect accessibility concerns
    if (lowerMessage.includes('elderly') || lowerMessage.includes('disabled') || lowerMessage.includes('mobility') || lowerMessage.includes('veteran')) {
      response.message += ' We also offer free or discounted cleanings for elderly individuals, disabled people, veterans, and those facing hardship. Please let us know if you\'d like to discuss this.';
    }

    // Default response if no service detected
    if (!response.suggestedService) {
      response.message = "Thanks for reaching out! We offer house cleaning, move-out cleaning, and interior painting services for Seattle and the Eastside. What can we help you with today?";
      response.followUpQuestions = [
        'What type of service are you interested in?',
        'Tell us about your project',
        'When do you need this done?'
      ];
    }

    this.conversationHistory.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    });

    this.conversationHistory.push({
      role: 'assistant',
      content: response.message,
      timestamp: new Date()
    });

    return response;
  }

  /**
   * Generate service recommendations based on user profile
   */
  generateRecommendations(userProfile) {
    const recommendations = [];

    // Analyze square footage
    if (userProfile.propertySize) {
      if (userProfile.propertySize > 3000) {
        recommendations.push({
          service: 'deep-cleaning',
          reason: 'With a larger property, our deep cleaning service ensures thorough attention to detail in every area.',
          priority: 'high'
        });
      }
    }

    // Timeline-based recommendations
    if (userProfile.timeline === 'move-out') {
      recommendations.push({
        service: 'move-out-cleaning',
        reason: 'Our move-out cleaning is specifically designed for rental turnovers and property transitions.',
        priority: 'high'
      });
    }

    // Budget-based recommendations
    if (userProfile.budget && userProfile.budget < 500) {
      recommendations.push({
        service: 'regular-cleaning',
        reason: 'Regular maintenance cleaning is a cost-effective way to keep your home fresh between deep cleans.',
        priority: 'medium'
      });
    }

    // Combined service recommendation
    if (userProfile.serviceNeeds.includes('cleaning') && userProfile.serviceNeeds.includes('painting')) {
      recommendations.push({
        service: 'combined-service',
        reason: 'Combining cleaning and painting saves time and coordination. We can handle both seamlessly.',
        priority: 'high'
      });
    }

    return recommendations;
  }

  /**
   * Provide smart scheduling suggestions
   */
  suggestScheduling(userProfile) {
    const suggestions = [];

    // Morning vs afternoon
    suggestions.push({
      time: 'morning',
      benefit: 'Early morning starts mean we can complete projects faster and you have your space back by afternoon.'
    });

    // Weekday vs weekend
    if (userProfile.timeline === 'flexible') {
      suggestions.push({
        time: 'weekday',
        benefit: 'Weekday scheduling often has more availability and can be completed faster.'
      });
    }

    // Seasonal recommendations
    const month = new Date().getMonth();
    if (month >= 5 && month <= 8) {
      suggestions.push({
        season: 'summer',
        benefit: 'Summer is great for exterior work and larger projects. Schedule early as we book up quickly!'
      });
    }

    return suggestions;
  }

  /**
   * Detect if user might qualify for community assistance program
   */
  checkCommunityProgramEligibility(userMessage) {
    const keywords = [
      'elderly', 'senior', 'disabled', 'disability', 'veteran', 'fixed income',
      'low income', 'struggling', 'hardship', 'eviction', 'homeless', 'help'
    ];

    const isEligible = keywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isEligible) {
      return {
        eligible: true,
        message: "We have a community care program that offers free or discounted cleanings for elderly individuals, disabled people, veterans, and those facing hardship. Please reach out directly at 206-571-5568 or seabnbllp@brushnbroom.com to discuss your situation.",
        programLink: '/community-care'
      };
    }

    return { eligible: false };
  }

  /**
   * Get conversation context for better responses
   */
  getConversationContext() {
    return {
      history: this.conversationHistory,
      userProfile: this.userProfile,
      messageCount: this.conversationHistory.length
    };
  }

  /**
   * Reset conversation
   */
  resetConversation() {
    this.conversationHistory = [];
    this.userProfile = {
      serviceNeeds: [],
      propertySize: null,
      budget: null,
      timeline: null,
      concerns: []
    };
  }
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BrushBroomAIAssistant;
}
