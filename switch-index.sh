#!/bin/bash

TARGET=$1

if [ "$TARGET" == "commercial" ]; then
    cp index-commercial.html index.html
    echo "Switched to Commercial Landing Page."
elif [ "$TARGET" == "original" ]; then
    cp index-original.html index.html
    echo "Switched to Original Landing Page."
else
    echo "Usage: ./switch-index.sh [commercial|original]"
fi
