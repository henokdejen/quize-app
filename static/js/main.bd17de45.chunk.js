(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),o=n(11),a=n.n(o),c=(n(93),n(26)),r=n(27),l=n(29),u=n(28),h=n(20),d=n(30);n(94);function m(e){var t=e.questionTitle,n=e.index;return s.a.createElement("div",null,n+", "+t)}var p="single",f="multiple",w={ask:"ask",check:"check"},v=1,y=function(e){var t=e.isSelected,n=e.choiceText,i=e.correct,o="choice-item ";return e.mode===w.check?o+=i?"choice-item-correct":t?"choice-item-wrong":"choice-item-unselected":o+=t?"choice-item-selected":"choice-item-unselected",s.a.createElement("div",{onClick:function(){e.mode!==w.check&&e.onChoiceSelected(e.index)},className:o},n)};function g(e){var t=e.choices_list,n=e.mode,i=e.answersList,o=e.onChoiceSelected,a=e.selectedIndexes;return s.a.createElement("div",null,t.map((function(e,t){return s.a.createElement(y,{isSelected:a.includes(t),choiceText:e,correct:i.includes(t),mode:n,index:t,onChoiceSelected:o,key:t})})))}var b=n(84);function T(e){var t=e.mode,n=e.flipPresentatonMode;return s.a.createElement("div",{className:"action-zone"},s.a.createElement(b.a,{type:"primary",onClick:n}," ",t===w.ask?"Check":"Continue"," "))}function _(e){var t=e.desc;return s.a.createElement("div",null,t)}var E=n(149),L=n(150),N=n(151),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={selectedIndexes:[],mode:w.ask},n.onChoiceSelected=n.onChoiceSelected.bind(Object(h.a)(n)),n.flipPresentatonMode=n.flipPresentatonMode.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onChoiceSelected",value:function(e){var t=[e],n=this.props.question.choiceType;this.state.selectedIndexes.includes(e)?t=this.state.selectedIndexes.filter((function(t){return t!==e})):n===f&&((t=this.state.selectedIndexes.slice()).push(e),console.log("here")),this.setState({selectedIndexes:t})}},{key:"flipPresentatonMode",value:function(){var e=this;this.state.mode!==w.ask||0!==this.state.selectedIndexes.length?this.setState((function(e){return e.mode===w.ask?{mode:w.check}:{mode:w.ask,selectedIndexes:[]}}),(function(){e.state.mode===w.ask&&e.props.onAQuestionFinished(!0)})):E.a.error({message:"Erorr",description:"please select ",onClick:function(){console.log("Notification Clicked!")}})}},{key:"render",value:function(){var e=this.props.question,t=e.questionTitle,n=e.choicesList,i=e.choiceType,o=e.answersList,a=e.answerDesc,c=this.props.index;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(L.a,{className:"quize-body"},s.a.createElement(N.a,{md:1,xs:1,lg:4,sm:1}),s.a.createElement(N.a,{md:22,lg:16,xs:22,sm:22},s.a.createElement(m,{questionTitle:t,index:c+1}),s.a.createElement(g,{choices_list:n,mode:this.state.mode,answersList:o,choiceType:i,selectedIndexes:this.state.selectedIndexes,onChoiceSelected:this.onChoiceSelected}),this.state.mode===w.check&&s.a.createElement(_,{desc:a})),s.a.createElement(N.a,{md:1,xs:1,lg:4,sm:1})),s.a.createElement(T,{mode:this.state.mode,flipPresentatonMode:this.flipPresentatonMode})))}}]),t}(s.a.Component),q=n(147),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).initialDuration=n.props.duration,n.state={duration:n.props.duration},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.duration>0&&(this.timerId=setInterval((function(){return e.tick()}),1e3))}},{key:"componentWillMount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){var e=this;this.setState((function(e){return{duration:e.duration-1}}),(function(){0===e.state.duration&&(clearInterval(e.timerId),e.props.onElapsed())}))}},{key:"render",value:function(){var e=this.state.duration,t=this.props.timerType;return console.log(e),t===v?s.a.createElement(I,{duration:e,initialDuration:this.initialDuration}):s.a.createElement(D,{duration:e})}}]),t}(s.a.Component);function I(e){var t=e.duration,n=e.initialDuration;return console.log(t,n),s.a.createElement(q.a,{type:"circle",percent:(n-t)/n*100,format:function(){return t},width:"200px"})}function D(e){var t=e.duration;return s.a.createElement("span",null,0===t?s.a.createElement("span",null,"Busted!"):function(e){var t=Math.floor(e/60),n=e%60;return(t<10?"0":"")+t+":"+(n<10?"0":"")+n}(t))}function C(e){var t=e.quizeTitle,n=e.currentQuestionNumber,i=e.totalNumberOfQuestions,o=e.correctAnswersCount,a=e.wrongAnswersCount,c=100*n/i;return s.a.createElement("div",{className:"page-header"},s.a.createElement(L.a,{gutter:[{xs:8,sm:16,md:24,lg:32},20]},s.a.createElement(N.a,{className:"gutter-row",lg:8,md:24},s.a.createElement("span",{className:"page-time"},t)),s.a.createElement(N.a,{className:"gutter-row",lg:4,md:12},s.a.createElement("div",{className:"gutter-box"},s.a.createElement(q.a,{percent:c,showInfo:!1})," ",n+"/"+i)),s.a.createElement(N.a,{className:"gutter-row",lg:4,md:12},s.a.createElement(x,{duration:140})),s.a.createElement(N.a,{className:"gutter-row",lg:8,md:24},"Correct: ",o,"   Wrong: ",a)))}var M=[{questionTitle:"How many types of proton environment are present for benzene ?",choicesList:["3","2","1"],answersList:[1],choiceType:p,answerDesc:"Benzene has one environment on it's own and another for the H atoms attached to it."},{questionTitle:"What is the characteristic spin (I) of 1H?",choicesList:["1/2","3/2","5/2"],answersList:[0],choiceType:p,answerDesc:"Theory based"},{questionTitle:" Which values can a nuclear spin quantum number have?",choicesList:["0","5/3","6/7"],answersList:[1],choiceType:p,answerDesc:"Theory based"},{questionTitle:"NMR spectroscopy is used for determining structure in which of the following materials?",choicesList:["Radioactive materials","Liquids","Gases"],answersList:[1],choiceType:p,answerDesc:"NMR spectroscopy is used for determining structure in liquids. It is also used for determining the structure in soluble chemical compounds."},{questionTitle:"NMR is the study of absorption of __________ by nuclei in a magnetic field?",choicesList:["Radioactive radiation","Radiofroquency radiation","Microwaves"],answersList:[1],choiceType:p,answerDesc:"NMR is the study of absorption of radio frequency radiation by nuclei in a magnetic field. For a particular nucleus an NMR absorption spectrum may consist of one to several groups of absorption lines."},{questionTitle:"NMR spectrometer provides ____________ and _____________ method of determining structure in soluble chemical compounds.",choicesList:["Accurate,Destructive","Accurate,Non-Destructive","Inaccurate,Destructive"],answersList:"Accurate,Non-Destructive",choiceType:p,answerDesc:"NMR spectrometer provides accurate and non-destructive method of determining structure in soluble chemical compounds."},{questionTitle:"NMR spectroscopy indicates the chemical nature of the __________ and spatial positions of________",choicesList:["Protons,Neutrons","Nuclues,Electrons","Nucleus,Neighbouring Nuclei"],answersList:[2],choiceType:p,answerDesc:"NMR spectroscopy indicates the chemical nature of the nuclei and spatial positions of neighbouring nuclei."},{questionTitle:"In NMR spectroscopy, the spinning nuclei in strong magnetic field must be irradiated by which of the following?",choicesList:["Perpendicular and strong field","Perpendicular and weak field","Parallel and strong field"],answersList:[1],choiceType:p,answerDesc:"Theory"},{questionTitle:"Elementary particles such as electrons and nucleus have the property of spin.",choicesList:["True","Flase","None of the above"],answersList:[0],choiceType:p,answerDesc:"Theory"},{questionTitle:"The difference between the field necessary for resonance in the sample and in some arbitrary chosen compound is which of the following?",choicesList:["Resonanace Shift","Chemical Shift","Matrix effect"],answersList:[1],choiceType:p,answerDesc:"Theory"},{questionTitle:"What are the units of chemical shift?",choicesList:["ppm","km","m/sec"],answersList:[0],choiceType:p,answerDesc:"Theory"},{questionTitle:"O2 has which spin?",choicesList:["Integral","Half Integral","Zero"],answersList:[2],choiceType:p,answerDesc:"Number of protons=Number of Neutrons"},{questionTitle:"The amount of energy available in radio frequency radiation is sufficient for which of the following?",choicesList:["Excite an atom","Vibrate an atom","Affect the nuclear spin of an atom"],answersList:[2],choiceType:p,answerDesc:"The amount of energy available in radio frequency radiation is sufficient for affecting the nuclear spin of an atom. It constitute the most fundamental part of spectroscopy."},{questionTitle:"Which waves does NMR use for detection of structure of substances?",choicesList:["Microwaves","UV radiation","Radio Waves"],answersList:[2],choiceType:p,answerDesc:"As radio waves are the lowest form of EM waves, they are used in NMR."},{questionTitle:"When energy is absorbed by the sample, the absorption can be observed as a change in signal developed by which of the following components?",choicesList:["Amplifier","Radio frequency Detector","Photon Detector"],answersList:[1],choiceType:p,answerDesc:"When energy is absorbed by the sample, the absorption can be observed as a change in signal developed by radiofrequency detector. It is then given to an amplifier."},{questionTitle:"What is the formula of acetaldehyde?",choicesList:["C2H4O","C3H6O","C7H6O"],answersList:[0],choiceType:p,answerDesc:"Theory"},{questionTitle:"What are the units on X-axis of the graph in the experiment?",choicesList:["Hz","ppm","m"],answersList:[1],choiceType:p,answerDesc:"Theory"}],O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentIndex:0,correct:0,wrong:0},n.onAQuestionFinished=n.onAQuestionFinished.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onSelected",value:function(e){console.log("I am selected")}},{key:"onAQuestionFinished",value:function(e){var t=e?"correct":"wrong";this.setState((function(e){return{currentIndex:e.currentIndex+1,updateField:e[t]+1}}))}},{key:"render",value:function(){var e=this.state,t=e.currentIndex,n=e.correct,i=e.wrong,o=M[t];return s.a.createElement("div",{className:"App"},s.a.createElement(C,{quizeTitle:o.questionTitle,currentQuestionNumber:t+1,totalNumberOfQuestions:M.length,correctAnswersCount:n,wrongAnswersCount:i}),s.a.createElement(k,{index:t,onAQuestionFinished:this.onAQuestionFinished,question:o}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,n){e.exports=n(146)},93:function(e,t,n){},94:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.bd17de45.chunk.js.map