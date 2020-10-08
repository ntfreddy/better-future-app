# How to debug Firebase functions locally in VS Code
1. Go to https://console.cloud.google.com/iam-admin/serviceaccounts
2. Select your current project from the top left
3. Make sure to select App Engine default service account 
4. Click the three dots on the right side and select create key.
5. Save the file in C:\Dev\
6. Run "cd functions"
7. Run "set GOOGLE_APPLICATION_CREDENTIALS=C:\Dev\pensezlavenir-4df21-686f467e240d.json"  
8. Run "firebase functions:config:get | ac .runtimeconfig.json"
9. Open the file ".runtimeconfig.json" in Notepad++ and resave using UTF8
10. Run "npm run debug"
11. In debug select "Debug"

## Reference
https://medium.com/firebase-developers/debugging-firebase-functions-in-vs-code-a1caf22db0b2
https://firebase.google.com/docs/functions/local-emulator
https://github.com/firebase/firebase-functions/issues/264


#How to debug Nuxt App in VS Code
1. Run "npm run dev"
2. In VS Code go to Debug and select "client: chrome"

## Reference
https://medium.com/firebase-developers/debugging-firebase-functions-in-vs-code-a1caf22db0b2
https://firebase.google.com/docs/functions/local-emulator
https://github.com/firebase/firebase-functions/issues/264