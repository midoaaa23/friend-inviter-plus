gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDLeaderboardBtnObjects1= [];
gdjs.MenuCode.GDLeaderboardBtnObjects2= [];
gdjs.MenuCode.GDLeaderboardBtnObjects3= [];
gdjs.MenuCode.GDWatchAdButtonObjects1= [];
gdjs.MenuCode.GDWatchAdButtonObjects2= [];
gdjs.MenuCode.GDWatchAdButtonObjects3= [];
gdjs.MenuCode.GDAdMessageTextObjects1= [];
gdjs.MenuCode.GDAdMessageTextObjects2= [];
gdjs.MenuCode.GDAdMessageTextObjects3= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewTextObjects3= [];
gdjs.MenuCode.GDAdsLeftTextObjects1= [];
gdjs.MenuCode.GDAdsLeftTextObjects2= [];
gdjs.MenuCode.GDAdsLeftTextObjects3= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDNewText2Objects3= [];
gdjs.MenuCode.GDLockedTextObjects1= [];
gdjs.MenuCode.GDLockedTextObjects2= [];
gdjs.MenuCode.GDLockedTextObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartObjects1[k] = gdjs.MenuCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.MenuCode.userFunc0xae0660 = function GDJSInlineCode(runtimeScene) {
"use strict";
var playerScore = runtimeScene.getGame().getVariables().get("TotalScore").getAsNumber();
if (playerScore > 0 && window.TsunamiGame) {
  window.TsunamiGame.submitScore(playerScore);
}


};
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() != gdjs.MenuCode.localVariables[0].getFromIndex(0).getAsString());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.MenuCode.localVariables[0].getFromIndex(0).getAsString());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Date", runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/TotalScore", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/SavedMonth", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}

}


{


gdjs.MenuCode.userFunc0xae0660(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LockedText"), gdjs.MenuCode.GDLockedTextObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDLockedTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLockedTextObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LockedText"), gdjs.MenuCode.GDLockedTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLockedTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLockedTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects1[i].getBehavior("Text").setText("Come back tomorrow!");
}
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("Today", variable);
}
gdjs.MenuCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.MenuCode.localVariables[0].getFromIndex(0).setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year") + 1900) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Date", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/TotalScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/SavedMonth", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}
gdjs.MenuCode.localVariables.pop();

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardBtn"), gdjs.MenuCode.GDLeaderboardBtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLeaderboardBtnObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLeaderboardBtnObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLeaderboardBtnObjects2[k] = gdjs.MenuCode.GDLeaderboardBtnObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLeaderboardBtnObjects2.length = k;
if (isConditionTrue_0) {
{if (window.TsunamiGame) { window.TsunamiGame.showLeaderboard(); }
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartObjects1[k] = gdjs.MenuCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LockedText"), gdjs.MenuCode.GDLockedTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLockedTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLockedTextObjects1[i].hide(false);
}
}
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 5);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(5);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.userFunc0xb2f420 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Legacy Adsgram / duplicate ad code removed. Rewarded ads are handled by
// tsunami.js (Monetag zone 11884483) through gdjs.MenuCode.userFunc0xae79b8.


};
gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0xb2f420(runtimeScene);

}


};gdjs.MenuCode.userFunc0xae79b8 = function GDJSInlineCode(runtimeScene) {
"use strict";
var adStatus = runtimeScene.getVariables().get('AdStatus');
adStatus.setString('loading'); // guard: stops this event from firing again while the ad plays
var finishAd = function (result) { adStatus.setString(result); };
try {
  if (window.TsunamiGame && typeof window.TsunamiGame.showRewarded === 'function') {
    window.TsunamiGame.showRewarded().then(function (watched) {
      finishAd(watched ? 'rewarded' : 'failed');
    }).catch(function () { finishAd('failed'); });
  } else {
    finishAd('failed');
  }
} catch (e) {
  console.warn('Rewarded ad could not start', e);
  finishAd('failed');
}


};
gdjs.MenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0xae79b8(runtimeScene);

}


};gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdMessageText"), gdjs.MenuCode.GDAdMessageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("WatchAdButton"), gdjs.MenuCode.GDWatchAdButtonObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("AdStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/AdsWatched", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("AdStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/LastAdDate", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("idle");
}
{for(var i = 0, len = gdjs.MenuCode.GDWatchAdButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWatchAdButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].hide();
}
}

{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() != gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year") + 1900) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year") + 1900) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("AdStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/AdsWatched", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{gdjs.evtTools.storage.writeStringInJSONFile("AdStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/LastAdDate", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WatchAdButton"), gdjs.MenuCode.GDWatchAdButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDWatchAdButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWatchAdButtonObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 5);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WatchAdButton"), gdjs.MenuCode.GDWatchAdButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDWatchAdButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWatchAdButtonObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WatchAdButton"), gdjs.MenuCode.GDWatchAdButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWatchAdButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWatchAdButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWatchAdButtonObjects2[k] = gdjs.MenuCode.GDWatchAdButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWatchAdButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "idle");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18712916);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdMessageText"), gdjs.MenuCode.GDAdMessageTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("requested");
}
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].getBehavior("Text").setText("Loading ad...");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AdMessageTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "requested");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "rewarded");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18718108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdMessageText"), gdjs.MenuCode.GDAdMessageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("AdsLeftText"), gdjs.MenuCode.GDAdsLeftTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("LockedText"), gdjs.MenuCode.GDLockedTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MenuCode.GDTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("WatchAdButton"), gdjs.MenuCode.GDWatchAdButtonObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(4).add(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("AdStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/AdsWatched", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year") + 1900) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")));
}
{gdjs.evtTools.storage.writeStringInJSONFile("AdStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/LastAdDate", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{for(var i = 0, len = gdjs.MenuCode.GDWatchAdButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWatchAdButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDLockedTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLockedTextObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects2[i].getBehavior("Text").setText("Tsunami💰");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].getBehavior("Text").setText("Success! +3 Lives Added.");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AdMessageTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("idle");
}
{for(var i = 0, len = gdjs.MenuCode.GDAdsLeftTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdsLeftTextObjects2[i].getBehavior("Text").setText("متبقي " + gdjs.evtTools.common.toString(5 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + " إعلانات اليوم");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "failed");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18717996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdMessageText"), gdjs.MenuCode.GDAdMessageTextObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].getBehavior("Text").setText("Ad not fully watched. No reward given.");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AdMessageTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("idle");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "AdMessageTimer") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdMessageText"), gdjs.MenuCode.GDAdMessageTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDAdMessageTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAdMessageTextObjects1[i].hide();
}
}
}

}


};gdjs.MenuCode.userFunc0xfec1a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
var apply = function () {
  var u = window.TsunamiGame && window.TsunamiGame.getUser();
  if (u) {
    runtimeScene.getGame().getVariables().get("PlayerTelegramName").setString(u.name);
    runtimeScene.getGame().getVariables().get("PlayerTelegramID").setString(u.id);
  }
};
apply();
setTimeout(apply, 1500);


};
gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


{


gdjs.MenuCode.eventsList5(runtimeScene);
}


{


gdjs.MenuCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
}

}


{


gdjs.MenuCode.userFunc0xfec1a8(runtimeScene);

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.MenuCode.GDWatchAdButtonObjects1.length = 0;
gdjs.MenuCode.GDWatchAdButtonObjects2.length = 0;
gdjs.MenuCode.GDWatchAdButtonObjects3.length = 0;
gdjs.MenuCode.GDAdMessageTextObjects1.length = 0;
gdjs.MenuCode.GDAdMessageTextObjects2.length = 0;
gdjs.MenuCode.GDAdMessageTextObjects3.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects3.length = 0;
gdjs.MenuCode.GDAdsLeftTextObjects1.length = 0;
gdjs.MenuCode.GDAdsLeftTextObjects2.length = 0;
gdjs.MenuCode.GDAdsLeftTextObjects3.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDNewText2Objects3.length = 0;
gdjs.MenuCode.GDLockedTextObjects1.length = 0;
gdjs.MenuCode.GDLockedTextObjects2.length = 0;
gdjs.MenuCode.GDLockedTextObjects3.length = 0;

gdjs.MenuCode.eventsList9(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.MenuCode.GDWatchAdButtonObjects1.length = 0;
gdjs.MenuCode.GDWatchAdButtonObjects2.length = 0;
gdjs.MenuCode.GDWatchAdButtonObjects3.length = 0;
gdjs.MenuCode.GDAdMessageTextObjects1.length = 0;
gdjs.MenuCode.GDAdMessageTextObjects2.length = 0;
gdjs.MenuCode.GDAdMessageTextObjects3.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects3.length = 0;
gdjs.MenuCode.GDAdsLeftTextObjects1.length = 0;
gdjs.MenuCode.GDAdsLeftTextObjects2.length = 0;
gdjs.MenuCode.GDAdsLeftTextObjects3.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDNewText2Objects3.length = 0;
gdjs.MenuCode.GDLockedTextObjects1.length = 0;
gdjs.MenuCode.GDLockedTextObjects2.length = 0;
gdjs.MenuCode.GDLockedTextObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
