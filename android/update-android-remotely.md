it's pretty simple actually. You run a background service that opens a comet style connection to your main website. When you release a new version, a push alert is sent down and your app downloads the new apk.
Once downloaded, you then simply execute it (if non-rooted, or you want a visual install) - or if the device is rooted, use the SU pmutil command to silently update.
The tricky bit is getting the app to automatically restart (as the method that works really depends on the vendor OS version you are using)
CLeanest way is to use an update broadcast receiver (so when the app updates, the receiver is automatically called)
This worked on my Samsung, but not on my Lenovo
Method two is to use the alarmmanager. This wll always run, but doesn't always go nstantly (can take up to 30 seconds)
So if your app is locking down the tablet, this is bad, as during that 30 seconds, someone will have open access to it.
So the method I use, method 3, is simply to run a helper app - which locks down the tablet then executes the main app. When the main app updates (and then shuts down) - the helper app is still there locked - after 5 seconds, it will then restart the (updated) main app
I wish I could just use method one, as it is nice and simple - but yeah, doesnt work on all configurations.