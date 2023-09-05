(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","layout":"absolute","backgroundColor":["#000000"],"watermark":false,"start":"this.init()","data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"history":{},"name":"Player760","textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false,"pitch":1}},"scripts":{"getKey":TDV.Tour.Script.getKey,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeJS":TDV.Tour.Script.executeJS,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"initQuiz":TDV.Tour.Script.initQuiz,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"startMeasurement":TDV.Tour.Script.startMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"downloadFile":TDV.Tour.Script.downloadFile,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"existsKey":TDV.Tour.Script.existsKey,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizShowScore":TDV.Tour.Script.quizShowScore,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoForward":TDV.Tour.Script.historyGoForward,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playAudioList":TDV.Tour.Script.playAudioList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"clone":TDV.Tour.Script.clone,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizStart":TDV.Tour.Script.quizStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"createTween":TDV.Tour.Script.createTween,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"isPanorama":TDV.Tour.Script.isPanorama,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openLink":TDV.Tour.Script.openLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement},"backgroundColorRatios":[0],"class":"Player","scrollBarColor":"#000000","scrollBarMargin":2,"hash": "7135c9884072b1e8600aa948663dbd43e969596dd1bd4325710bdf9448be41a6", "definitions": [{"id":"playList_7388AEA5_652C_6DA7_41A7_0749E1AC8C10","items":["this.PanoramaPlayListItem_738A7F86_652C_6C62_41A0_3F4375D9DA8F"],"class":"PlayList"},{"id":"HTMLText_70ACD15A_64E4_34E2_41C9_0EBBE5C1417A","backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"class":"HTMLText","data":{"name":"LeftDescription"},"scrollBarColor":"#000000","paddingLeft":10,"scrollBarMargin":2,"paddingRight":10,"top":20,"paddingTop":10,"width":291,"paddingBottom":10,"height":56,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","backgroundOpacity":0.6,"minHeight":0,"html":trans('HTMLText_70ACD15A_64E4_34E2_41C9_0EBBE5C1417A.html'),"minWidth":0,"left":20,"propagateClick":false},{"id":"ViewerAreaLabeled_70A94158_64E4_34EE_418A_DF1359C85EA6","left":0,"progressRight":"33%","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipFontFamily":"Arial","playbackBarRight":0,"toolTipShadowColor":"#333138","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesGap":0,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"data":{"name":"LeftViewer"},"subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","toolTipPaddingTop":4,"show":"this.setPanoramaCameraWithSpot(this.playList_7388AEA5_652C_6DA7_41A7_0749E1AC8C10, this.PanoramaPlayListItem_738A7F86_652C_6C62_41A0_3F4375D9DA8F, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_70A94158_64E4_34EE_418A_DF1359C85EA6.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7388AEA5_652C_6DA7_41A7_0749E1AC8C10.set('selectedIndex', -1); }, this);this.setPlayListSelectedIndex(this.playList_7388AEA5_652C_6DA7_41A7_0749E1AC8C10, 0)","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"height":"100%","width":"100%","progressHeight":2,"subtitlesTextShadowColor":"#000000","progressBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","propagateClick":false,"playbackBarLeft":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBorderRadius":2,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","class":"ViewerArea","playbackBarBorderSize":0,"vrPointerSelectionTime":2000,"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"firstTransitionDuration":0,"vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadShadow":true,"toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","top":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"playbackBarBottom":5,"minHeight":50,"toolTipFontSize":"1.11vmin","minWidth":100,"toolTipPaddingBottom":4,"playbackBarHeight":10,"displayTooltipInTouchScreens":false,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0]},{"id":"Image_70252355_64DC_74E6_41AC_4954247C5EBA","right":"0%","scaleMode":"fit_inside","class":"Image","data":{"name":"Image12559"},"url":trans('Image_70252355_64DC_74E6_41AC_4954247C5EBA.url'),"top":"0%","horizontalAlign":"center","height":"100%","width":"11.205%","backgroundOpacity":0,"click":"this.openLink(this.translate('LinkBehaviour_70359473_64DC_1CA3_41CF_03F15B32A856.source'), '_blank')","minHeight":1,"minWidth":1,"verticalAlign":"middle","propagateClick":false},{"id":"panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_camera","initialSequence":"this.sequence_6B1B91AC_64EC_37A6_4178_90907B432EDA","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"MainViewer","progressRight":"33%","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipFontFamily":"Arial","playbackBarRight":0,"toolTipShadowColor":"#333138","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesGap":0,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"data":{"name":"Main Viewer"},"subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"height":"100%","width":"100%","progressHeight":2,"subtitlesTextShadowColor":"#000000","progressBorderSize":0,"playbackBarBorderRadius":0,"subtitlesFontSize":"3vmin","playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","propagateClick":false,"playbackBarLeft":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBorderRadius":2,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","class":"ViewerArea","playbackBarBorderSize":0,"vrPointerSelectionTime":2000,"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"firstTransitionDuration":0,"vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadShadow":true,"toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"playbackBarBottom":5,"minHeight":50,"toolTipFontSize":"1.11vmin","minWidth":100,"toolTipPaddingBottom":4,"playbackBarHeight":10,"displayTooltipInTouchScreens":false,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0],"playbackBarProgressBorderSize":0},{"id":"Container_70A9C157_64E4_34E2_41BC_A27B2D52EC87","backgroundColor":[],"backgroundColorRatios":[],"overflow":"hidden","class":"Container","data":{"name":"LeftContainer"},"scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"top":0,"bottom":0,"width":"50%","minHeight":0,"minWidth":0,"children":["this.ViewerAreaLabeled_70A94158_64E4_34EE_418A_DF1359C85EA6","this.HTMLText_70ACD15A_64E4_34E2_41C9_0EBBE5C1417A"],"layout":"absolute","propagateClick":false,"left":0},{"frames":[{"cube":{"levels":[{"height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_0/{face}/0/{row}_{column}.jpg","width":15360,"colCount":30,"rowCount":5},{"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_0/{face}/1/{row}_{column}.jpg","width":9216,"colCount":18,"rowCount":3},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_0/{face}/2/{row}_{column}.jpg","width":6144,"colCount":12,"rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_0/{face}/3/{row}_{column}.jpg","width":3072,"colCount":6,"rowCount":1},{"height":1536,"class":"TiledImageResourceLevel","url":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_0/{face}/vr/0.jpg","width":9216,"colCount":6,"rowCount":1},{"height":2048,"class":"TiledImageResourceLevel","url":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_0/{face}/vr2gen/0.jpg","width":12288,"colCount":6,"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_t.jpg","class":"CubicPanoramaFrame"}],"id":"panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5","hfov":360,"label":trans('panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5.label'),"data":{"label":"low"},"vfov":180,"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_t.jpg","hfovMin":"135%"},{"displayPlaybackBar":true,"id":"ViewerAreaLabeled_70AAD159_64E4_34EE_41C3_99760548F719PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","viewerArea":"this.ViewerAreaLabeled_70AAD159_64E4_34EE_41C3_99760548F719","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate"},{"id":"panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_camera","initialSequence":"this.sequence_7460A033_64E4_14A2_41D1_2EF696863769","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"SplitViewer_77734DEA_64E4_2FA2_41D7_988C9CB06B0A","layout":"absolute","backgroundColor":[],"backgroundColorRatios":[],"overflow":"scroll","class":"Container","data":{"name":"SplitViewer"},"scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"top":"0%","height":"100%","init":"this._initSplitViewer(event.source)","minHeight":0,"minWidth":0,"children":["this.Container_70A9C157_64E4_34E2_41BC_A27B2D52EC87","this.Container_70A90158_64E4_34EE_41D0_790D2D3B1C9F","this.Container_70AD115E_64E4_34E2_41D5_8EB97148E9E2"],"width":"100%","propagateClick":false,"left":"0%"},{"id":"mainPlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_camera","media":"this.panorama_754559AE_64EC_17A2_41D7_01641DAED2BE","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_camera","media":"this.panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_camera","media":"this.panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"id":"Container_70AD115E_64E4_34E2_41D5_8EB97148E9E2","backgroundColor":[],"backgroundColorRatios":[],"overflow":"scroll","class":"Container","data":{"name":"Separator"},"scrollBarColor":"#000000","scrollBarMargin":2,"contentOpaque":true,"gap":10,"top":0,"horizontalAlign":"center","bottom":0,"width":"6%","cursor":"hand","minHeight":0,"minWidth":0,"children":["this.Container_70AD215F_64E4_34E2_41D5_E5A4E0FD8241"],"layout":"horizontal","propagateClick":false,"left":"47%"},{"id":"playList_73889EA5_652C_6DA7_41B3_10915CD1D85C","items":["this.PanoramaPlayListItem_738BBF86_652C_6C62_41CE_897967CE3515"],"class":"PlayList"},{"id":"Container_70AD215F_64E4_34E2_41D5_E5A4E0FD8241","layout":"absolute","backgroundColor":["#FFFFFF"],"shadowColor":"#000000","shadowSpread":1,"backgroundColorRatios":[0],"shadow":true,"class":"Container","data":{"name":"SeparatorVisible"},"scrollBarColor":"#000000","scrollBarMargin":2,"shadowVerticalLength":0,"gap":10,"shadowBlurRadius":10,"maxWidth":6,"width":"8%","cursor":"hand","height":"100%","minHeight":0,"minWidth":2,"shadowOpacity":0.3,"overflow":"scroll"},{"displayPlaybackBar":true,"id":"ViewerAreaLabeled_70A94158_64E4_34EE_418A_DF1359C85EA6PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","viewerArea":"this.ViewerAreaLabeled_70A94158_64E4_34EE_418A_DF1359C85EA6","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate"},{"frames":[{"cube":{"levels":[{"height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_0/{face}/0/{row}_{column}.jpg","width":15360,"colCount":30,"rowCount":5},{"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_0/{face}/1/{row}_{column}.jpg","width":9216,"colCount":18,"rowCount":3},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_0/{face}/2/{row}_{column}.jpg","width":6144,"colCount":12,"rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_0/{face}/3/{row}_{column}.jpg","width":3072,"colCount":6,"rowCount":1},{"height":1536,"class":"TiledImageResourceLevel","url":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_0/{face}/vr/0.jpg","width":9216,"colCount":6,"rowCount":1},{"height":2048,"class":"TiledImageResourceLevel","url":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_0/{face}/vr2gen/0.jpg","width":12288,"colCount":6,"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_t.jpg","class":"CubicPanoramaFrame"}],"id":"panorama_754559AE_64EC_17A2_41D7_01641DAED2BE","hfov":360,"label":trans('panorama_754559AE_64EC_17A2_41D7_01641DAED2BE.label'),"data":{"label":"brits"},"vfov":180,"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_754559AE_64EC_17A2_41D7_01641DAED2BE_t.jpg","hfovMin":"135%"},{"id":"HTMLText_70ADA15C_64E4_34E6_41D1_E45C4D0AD37B","backgroundColor":["#FFFFFF"],"right":20,"backgroundColorRatios":[0],"class":"HTMLText","scrollBarColor":"#000000","paddingLeft":10,"scrollBarMargin":2,"data":{"name":"RightDescription"},"paddingRight":10,"top":20,"paddingTop":10,"width":383,"paddingBottom":10,"height":52,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","backgroundOpacity":0.6,"minHeight":0,"html":trans('HTMLText_70ADA15C_64E4_34E6_41D1_E45C4D0AD37B.html'),"minWidth":0,"propagateClick":false},{"id":"ViewerAreaLabeled_70AAD159_64E4_34EE_41C3_99760548F719","right":0,"progressRight":"33%","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipFontFamily":"Arial","progressOpacity":0.7,"playbackBarRight":0,"toolTipShadowColor":"#333138","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesGap":0,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"data":{"name":"RightViewer"},"subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","toolTipPaddingTop":4,"show":"this.setPanoramaCameraWithSpot(this.playList_73889EA5_652C_6DA7_41B3_10915CD1D85C, this.PanoramaPlayListItem_738BBF86_652C_6C62_41CE_897967CE3515, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_70AAD159_64E4_34EE_41C3_99760548F719.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_73889EA5_652C_6DA7_41B3_10915CD1D85C.set('selectedIndex', -1); }, this);this.setPlayListSelectedIndex(this.playList_73889EA5_652C_6DA7_41B3_10915CD1D85C, 0)","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"height":"100%","width":"100%","progressHeight":2,"subtitlesTextShadowColor":"#000000","progressBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","propagateClick":false,"playbackBarLeft":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBorderRadius":2,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","class":"ViewerArea","playbackBarBorderSize":0,"vrPointerSelectionTime":2000,"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"firstTransitionDuration":0,"vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadShadow":true,"toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","top":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"playbackBarBottom":5,"minHeight":50,"toolTipFontSize":"1.11vmin","minWidth":100,"toolTipPaddingBottom":4,"playbackBarHeight":10,"displayTooltipInTouchScreens":false,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0],"playbackBarProgressBorderSize":0},{"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate"},{"id":"Container_71BD4A53_64DC_14E2_41A0_8D26153E0A62","layout":"absolute","scrollBarMargin":2,"right":"0%","class":"Container","data":{"name":"Container12538"},"scrollBarColor":"#000000","gap":10,"bottom":"1.76%","height":"5.733%","width":"100%","backgroundOpacity":0,"minHeight":20,"minWidth":20,"children":["this.Image_70252355_64DC_74E6_41AC_4954247C5EBA"],"propagateClick":false,"overflow":"scroll"},{"id":"panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_camera","initialSequence":"this.sequence_769C9D93_64EC_2C62_41C4_0E8CE0C1281B","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"Container_70A90158_64E4_34EE_41D0_790D2D3B1C9F","backgroundColor":[],"right":0,"backgroundColorRatios":[],"class":"Container","scrollBarColor":"#000000","scrollBarMargin":2,"data":{"name":"RightContainer"},"gap":10,"top":0,"bottom":0,"width":"50%","minHeight":0,"minWidth":0,"children":["this.ViewerAreaLabeled_70AAD159_64E4_34EE_41C3_99760548F719","this.HTMLText_70ADA15C_64E4_34E6_41D1_E45C4D0AD37B"],"layout":"absolute","propagateClick":false,"overflow":"hidden"},{"frames":[{"cube":{"levels":[{"height":8704,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/0/{row}_{column}.jpg","width":52224,"colCount":102,"rowCount":17},{"height":4608,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/1/{row}_{column}.jpg","width":27648,"colCount":54,"rowCount":9},{"height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/2/{row}_{column}.jpg","width":15360,"colCount":30,"rowCount":5},{"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/3/{row}_{column}.jpg","width":9216,"colCount":18,"rowCount":3},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/4/{row}_{column}.jpg","width":6144,"colCount":12,"rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/5/{row}_{column}.jpg","width":3072,"colCount":6,"rowCount":1},{"height":1536,"class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/vr/0.jpg","width":9216,"colCount":6,"rowCount":1},{"height":2048,"class":"TiledImageResourceLevel","url":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_0/{face}/vr2gen/0.jpg","width":12288,"colCount":6,"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_t.jpg","class":"CubicPanoramaFrame"}],"id":"panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2","hfov":360,"label":trans('panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2.label'),"data":{"label":"wow"},"vfov":180,"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_t.jpg"},{"id":"PanoramaPlayListItem_738A7F86_652C_6C62_41A0_3F4375D9DA8F","camera":"this.panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5_camera","media":"this.panorama_746706DD_64E4_3DE6_41D1_2E0750BCB3F5","player":"this.ViewerAreaLabeled_70A94158_64E4_34EE_418A_DF1359C85EA6PanoramaPlayer","class":"PanoramaPlayListItem"},{"id":"sequence_6B1B91AC_64EC_37A6_4178_90907B432EDA","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"sequence_7460A033_64E4_14A2_41D1_2EF696863769","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"PanoramaPlayListItem_738BBF86_652C_6C62_41CE_897967CE3515","camera":"this.panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2_camera","media":"this.panorama_77870464_64EC_7CA6_41D0_C2BE208C10C2","player":"this.ViewerAreaLabeled_70AAD159_64E4_34EE_41C3_99760548F719PanoramaPlayer","class":"PanoramaPlayListItem"},{"id":"sequence_769C9D93_64EC_2C62_41C4_0E8CE0C1281B","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]}],"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","width":"100%","minHeight":0,"minWidth":0,"children":["this.MainViewer","this.SplitViewer_77734DEA_64E4_2FA2_41D7_988C9CB06B0A","this.Container_71BD4A53_64DC_14E2_41A0_8D26153E0A62"],"propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.9.js.map
})();
//Generated with v2023.1.9, Tue Sep 5 2023