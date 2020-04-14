set JAVA_HOME=%JAVA8_HOME%
set ANDROID_HOME=%ANDROID_SDK_ROOT%
set GRADLE_OPTS=-Xms512m -Xmx4g
set NODE_OPTIONS="--max_old_space_size=4096"
set PATH=%SystemRoot%\System32
rem https://github.com/apache/cordova-cli/issues/434
set PATH=c:\Windows\System32\wbem;%PATH%
set PATH=%JAVA_HOME%\bin;%PATH%
set PATH=%NODE_HOME%;%PATH%
set PATH=%NPM_HOME%;%PATH%
set PATH=%GRADLE_HOME%\bin;%PATH%
set PATH=%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin;%PATH%
call ionic cordova run android --livereload
