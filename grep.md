search file contents

Text in subfolders 	-r 	grep -r Walden ~/Documents/*
Finds Walden in any file in any subfolder of ~/Documents.
Whole words only 	-w 	grep -w live
Finds only live ; does not find liver , lives , lived , and so on.
Case-insensitive text 	-i 	grep -i pond
Finds pond , POND , or Pond .
File names only 	-l 	grep -l Walden
Finds files containing Walden , but returns only a list of file names.
Number of occurrences only 	-c 	grep -c Walden
Returns the names of files containing Walden and the number of hits in each file.

grep -rl "string" /path

    -r (or --recursive) option is used to traverse also all sub-directories of /path, whereas
    -l (or --files-with-matches) option is used to only print filenames of matching files, and not the matching lines (this could also improve the speed, given that grep stop reading a file at first match with this option).

search file names
find . -iregex 'f[[:alnum:]]\.frm'
find . -iregex '.*network.*\.pdf'
ignore case
-iregex

brew reinstall grep --with-default-names

Application: curator
Application Id:

b07f44d284f49dca351b4d975f763608ead212f71812d307a4db475888b2862b

Secret:

b77f4959617bfb81a4c8b26cfad4ca20114815ca919e0bafa10df551d8e68cce

Scopes:


Callback urls:

urn:ietf:wg:oauth:2.0:oob	Authorize


export CREATUBBLES_CLIENT_ID="b07f44d284f49dca351b4d975f763608ead212f71812d307a4db475888b2862b"
export CREATUBBLES_CLIENT_SECRET="b77f4959617bfb81a4c8b26cfad4ca20114815ca919e0bafa10df551d8e68cce"
export CREATUBBLES_USERNAME="mchaver@gmail.com"
export CREATUBBLES_PASSWORD="QianlonG17"
export CREATUBBLES_API_URL="http://api.creatubbles.dev:3000/v2/"


curl \
  -H 'Accept: application/json' \
  -F grant_type=client_credentials \
  -F client_id="b07f44d284f49dca351b4d975f763608ead212f71812d307a4db475888b2862b" \
  -F client_secret="b77f4959617bfb81a4c8b26cfad4ca20114815ca919e0bafa10df551d8e68cce" \
  -X POST https://api.creatubbles.com/v2/oauth/token

curl \
  -H 'Accept: application/json' \
  -F grant_type=client_credentials \
  -F client_id="b07f44d284f49dca351b4d975f763608ead212f71812d307a4db475888b2862b" \
  -F client_secret="b77f4959617bfb81a4c8b26cfad4ca20114815ca919e0bafa10df551d8e68cce" \
  -X POST http://api.creatubbles.dev:3000/v2/oauth/token

{"access_token":"a8c814aa3cee2d5cdca997a314dca206335c119e7121e954a7c6f17592caa33d","token_type":"bearer","created_at":1479918313}

curl \
  -H 'Content-Type: application/vnd.api+json'
  -H 'Accept: application/vnd.api+json'
  -X GET https://api.creatubbles.com/v2/creations/YNzO8Rmv'
  
  -H 'Authorization: Bearer 4aec18d02527e83d56b87c8699b65649f' \
  
  
  
  
curl \
  -H 'Content-Type: application/vnd.api+json' \
  -H 'Accept: application/vnd.api+json' \
  -H 'Authorization: Bearer a8c814aa3cee2d5cdca997a314dca206335c119e7121e954a7c6f17592caa33d' \
  -X GET http://api.creatubbles.dev:3000/v2/creations/1TCH9JZD
  
  
  http://creatubbles.dev:3000/admin/creations/1TCH9JZD
  
  
  
  
  
  
  