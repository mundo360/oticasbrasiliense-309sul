(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
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
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
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
                                    q = s[0x1];
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
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
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
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
var script = {"children":["this.MainViewer","this.Container_AB78F86A_B8C9_2C31_41E6_8D9C7E7E4FF1","this.Container_AB72D250_B8CF_5C11_41D2_67957985A24B"],"hash": "c078bb3eddad6d8b48f0b3264a57eaebaab38529815876f34616499c07f07611", "definitions": [{"iconURL":"skin/IconButton_AB79086A_B8C9_2C31_41DE_4F517563354C.png","propagateClick":false,"backgroundOpacity":0.3,"id":"IconButton_AB79086A_B8C9_2C31_41DE_4F517563354C","data":{"name":"IconButtonlocal"},"backgroundColor":[],"tabIndex":0,"horizontalAlign":"center","transparencyActive":true,"minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"class":"IconButton","height":54,"width":57.2},{"items":[{"camera":"this.panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_camera","media":"this.panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"scaleMode":"fit_outside","propagateClick":false,"backgroundOpacity":0,"id":"Image_AB711250_B8CF_5C11_41E3_C121D625F103","left":15,"maxHeight":55,"horizontalAlign":"center","data":{"name":"logo"},"minHeight":1,"maxWidth":55,"minWidth":1,"url":trans('Image_AB711250_B8CF_5C11_41E3_C121D625F103.url'),"verticalAlign":"middle","top":"0%","bottom":"0%","class":"Image","width":"9.722%"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_AE9854CB_B94B_6477_41B1_E6408827FB5A","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_camera"},{"layout":"absolute","id":"Container_AB72D250_B8CF_5C11_41D2_67957985A24B","data":{"name":"----HEADER","initialScale":1},"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"left":"0%","right":"0%","scrollBarMargin":1,"scrollBarWidth":5,"minHeight":1,"minWidth":1,"gap":5,"backgroundColorRatios":[0],"top":"0%","class":"Container","height":64.8,"children":["this.Image_AB711250_B8CF_5C11_41E3_C121D625F103","this.Image_AB713250_B8CF_5C11_41E2_DA53E141DD73"]},{"iconURL":"skin/IconButton_AB79186A_B8C9_2C31_41B5_2FCD1C6A6F06.png","propagateClick":false,"backgroundOpacity":0.3,"id":"IconButton_AB79186A_B8C9_2C31_41B5_2FCD1C6A6F06","data":{"name":"IconButtonsite"},"backgroundColor":[],"tabIndex":0,"horizontalAlign":"center","transparencyActive":true,"minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"class":"IconButton","height":54,"width":57.2},{"iconURL":"skin/IconButton_AB79286A_B8C9_2C31_41B6_AA653682A71C.png","propagateClick":false,"backgroundOpacity":0.3,"id":"IconButton_AB79286A_B8C9_2C31_41B6_AA653682A71C","data":{"name":"IconButtonzap"},"backgroundColor":[],"tabIndex":0,"horizontalAlign":"center","transparencyActive":true,"minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"class":"IconButton","height":54,"width":57.2},{"aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"scaleMode":"fit_inside","propagateClick":false,"backgroundOpacity":0,"id":"Image_AB713250_B8CF_5C11_41E2_DA53E141DD73","left":"8.34%","horizontalAlign":"center","data":{"name":"Imatexto oticage6428"},"minHeight":1,"minWidth":1,"url":trans('Image_AB713250_B8CF_5C11_41E2_DA53E141DD73.url'),"verticalAlign":"middle","top":"0%","bottom":"0%","class":"Image","width":"22.025%"},{"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Georgia","playbackBarHeadBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadow":true,"toolTipPaddingBottom":7,"toolTipPaddingTop":7,"left":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionTime":2000,"toolTipShadowOpacity":0,"minHeight":50,"playbackBarBottom":5,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowHorizontalLength":1,"minWidth":100,"data":{"name":"Main Viewer"},"toolTipFontSize":13,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","playbackBarProgressBorderSize":0,"subtitlesFontFamily":"Arial","progressRight":0,"toolTipShadowColor":"#333333","progressBackgroundColorRatios":[0.00784313725490196],"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":10,"progressBarBorderColor":"#0066FF","vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"toolTipBorderColor":"#767676","subtitlesTop":0,"toolTipTextShadowColor":"#000000","progressBorderColor":"#FFFFFF","id":"MainViewer","progressBarBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":10,"vrThumbstickRotationStep":20,"subtitlesBottom":50,"progressBottom":0,"toolTipBackgroundColor":"#000000","subtitlesGap":0,"progressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","progressHeight":10,"firstTransitionDuration":0,"progressBarBorderRadius":0,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","top":0,"subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"progressBarBorderSize":0,"playbackBarBorderSize":0,"progressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","height":"100%","progressLeft":0,"width":"100%","toolTipOpacity":0.5,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15},{"thumbnailUrl":"media/panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_t.webp","frames":[{"cube":{"class":"ImageResource","levels":[{"width":12288,"url":"media/panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_0/{face}/0/{row}_{column}.webp","height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"url":"media/panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_0/{face}/1/{row}_{column}.webp","height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"url":"media/panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_0/{face}/2/{row}_{column}.webp","height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992_t.webp"}],"hfov":360,"hfovMax":130,"data":{"label":"360-14"},"hfovMin":"150%","vfov":180,"label":trans('panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992.label'),"class":"Panorama","id":"panorama_A169CAEC_B94B_2C31_41E1_A6D8E8A2C992"},{"layout":"horizontal","id":"Container_AB79486A_B8C9_2C31_41CE_56582C7C600C","left":"0%","scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"gap":1,"scrollBarMargin":1,"scrollBarWidth":5,"minHeight":1,"minWidth":1,"scrollBarOpacity":0,"horizontalAlign":"center","data":{"name":"-button set container"},"verticalAlign":"middle","backgroundColorRatios":[0.00392156862745098],"overflow":"scroll","bottom":"0%","class":"Container","paddingLeft":10,"height":54.15,"children":["this.IconButton_AB79586A_B8C9_2C31_418E_D09400B11E28","this.IconButton_AB79286A_B8C9_2C31_41B6_AA653682A71C","this.IconButton_AB79386A_B8C9_2C31_41E4_20645CEBF85E","this.IconButton_AB79086A_B8C9_2C31_41DE_4F517563354C","this.IconButton_AB79186A_B8C9_2C31_41B5_2FCD1C6A6F06","this.IconButton_AB78E86A_B8C9_2C31_41D5_7BC2A64717D9"],"width":"100%"},{"iconURL":"skin/IconButton_AB79586A_B8C9_2C31_418E_D09400B11E28.png","propagateClick":false,"backgroundOpacity":0.3,"id":"IconButton_AB79586A_B8C9_2C31_418E_D09400B11E28","data":{"name":"IconButtonhouse"},"backgroundColor":[],"tabIndex":0,"horizontalAlign":"center","transparencyActive":true,"minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"class":"IconButton","height":54,"width":57.2},{"iconURL":"skin/IconButton_AB79386A_B8C9_2C31_41E4_20645CEBF85E.png","propagateClick":false,"backgroundOpacity":0.3,"id":"IconButton_AB79386A_B8C9_2C31_41E4_20645CEBF85E","data":{"name":"IconButtononsta"},"backgroundColor":[],"tabIndex":0,"horizontalAlign":"center","transparencyActive":true,"minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"class":"IconButton","height":54,"width":57.2},{"iconURL":"skin/IconButton_AB78E86A_B8C9_2C31_41D5_7BC2A64717D9.png","propagateClick":false,"backgroundOpacity":0.3,"id":"IconButton_AB78E86A_B8C9_2C31_41D5_7BC2A64717D9","data":{"name":"IconButtonGoogle"},"backgroundColor":[],"tabIndex":0,"horizontalAlign":"center","transparencyActive":true,"minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"class":"IconButton","height":54,"width":57.2},{"layout":"absolute","backgroundOpacity":0.64,"id":"Container_AB78F86A_B8C9_2C31_41E6_8D9C7E7E4FF1","data":{"name":"---- BUTTON SET","initialScale":1},"scrollBarColor":"#000000","left":"0%","right":"0%","scrollBarMargin":1,"scrollBarWidth":5,"minHeight":1,"minWidth":1,"gap":5,"bottom":"0%","class":"Container","height":73.1,"children":["this.Image_AB79686A_B8C9_2C31_41C7_15A49AE3950A","this.Container_AB79486A_B8C9_2C31_41CE_56582C7C600C"],"backgroundImageUrl":"skin/Container_AB78F86A_B8C9_2C31_41E6_8D9C7E7E4FF1.png"},{"scaleMode":"fit_outside","backgroundOpacity":0,"id":"Image_AB79686A_B8C9_2C31_41C7_15A49AE3950A","left":"0%","maxHeight":1,"horizontalAlign":"center","data":{"name":"white line"},"right":"0%","minHeight":1,"maxWidth":2000,"minWidth":1,"url":trans('Image_AB79686A_B8C9_2C31_41C7_15A49AE3950A.url'),"verticalAlign":"middle","bottom":57.75,"class":"Image","height":1},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_AE9854CB_B94B_6477_41B1_E6408827FB5A"}],"layout":"absolute","id":"rootPlayer","data":{"history":{},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false},"defaultLocale":"pt","name":"Player468","locales":{"pt":"locale/pt.txt"}},"scrollBarColor":"#000000","backgroundColor":["#000000"],"gap":10,"scrollBarMargin":2,"start":"this.init()","vrPolyfillScale":0.5,"minHeight":20,"minWidth":20,"watermark":false,"backgroundColorRatios":[0],"class":"Player","left":352.75,"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"width":"100%","scripts":{"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"clone":TDV.Tour.Script.clone,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"createTween":TDV.Tour.Script.createTween,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeJS":TDV.Tour.Script.executeJS,"enableVR":TDV.Tour.Script.enableVR,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"downloadFile":TDV.Tour.Script.downloadFile,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"disableVR":TDV.Tour.Script.disableVR,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPixels":TDV.Tour.Script.getPixels,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"init":TDV.Tour.Script.init,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"setValue":TDV.Tour.Script.setValue,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"mixObject":TDV.Tour.Script.mixObject,"registerKey":TDV.Tour.Script.registerKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleVR":TDV.Tour.Script.toggleVR,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizFinish":TDV.Tour.Script.quizFinish,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getMainViewer":TDV.Tour.Script.getMainViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showWindow":TDV.Tour.Script.showWindow,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isPanorama":TDV.Tour.Script.isPanorama,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setLocale":TDV.Tour.Script.setLocale}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Fri Mar 21 2025