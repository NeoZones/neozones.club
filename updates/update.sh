#!/bin/bash
updated=$(date "+%Y-%m-%d %T\%:z")

# Get title
read -p "Title: " title

if [[ -z "$title" ]]; then
   printf '%s\n' "No input entered"
   exit 1
fi

# Get link
read -p "Link: " link

if [[ -z "$link" ]]; then
   printf '%s\n' "No input entered"
   exit 1
fi

# Get description
read -p "Description: " description

if [[ -z "$description" ]]; then
   printf '%s\n' "No input entered"
   exit 1
fi

# Get content
read -p "Content: " content

if [[ -z "$content" ]]; then
   printf '%s\n' "No input entered"
   exit 1
fi

sed -i '/NeoZones Site Updates/a <entry>\n\t<title>\'"$title"'</title>\n\t<link href="'"$link"'" />\n\t<description>\'"$description"'</description>\n\t<content type="html">'"$content"'</content>\n\t<updated>'"$updated"'</updated>\n\t<author>\n\t\t<name>'"$USER"'</name>\n\t\t<uri>https:\/\/neozones.club\/~'"$USER"'\/</uri>\n\t</author>\n</entry>' updates.xml