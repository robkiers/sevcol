(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0qyw":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=e("5A/x"),u=e("5RkM"),o=function(){function n(n,l){this.changeDetectorRef=n,this._api=l,this.screenType="mobile",this.slidePercentage=100,this.columns=[{definition:"title",header:"Title",width:"30%"},{definition:"category",header:"Category",width:"30%"},{definition:"shortDescription",header:"Description",width:"40%"}],this.displayView=!1}return n.prototype.ngOnInit=function(){var n=this;this._api.getDatabaseList().subscribe(function(l){return n.databaseEntries=l})},n.prototype.rowSelect=function(n){this.selectedEntry=n,this.show()},n.prototype.createNewEntry=function(){this.displayView=!0,this.selectedEntry=null,this.changeDetectorRef.detectChanges(),this.databaseViewComponent.createFormgroup()},n.prototype.determineScreen=function(){return window.innerWidth<500?"1":"2"},n.prototype.show=function(){this.displayView=!0},n.prototype.closePanel=function(n){this.displayView=!1},n}(),i=function(){return function(){}}(),b=e("pMnS"),c=e("t68o"),r=e("zbXB"),s=e("NcP4"),d=e("9tWs"),p=e("7iLc"),m=e("r43C"),B=e("lzlj"),f=e("FVSy"),h=e("gIcY"),w=e("o3x0"),g=e("Fzqc"),y=e("bujt"),S=e("UodH"),x=e("dWZg"),v=e("lLAP"),k=e("wFw1"),D=e("4OOs"),N=e("AEW0"),E=e("Ip0R"),_=e("jlZm"),I=e("AyJq"),V=e("YlbQ"),j=t.rb({encapsulation:0,styles:[["@media (max-width:600px){.floating-container[_ngcontent-%COMP%]{margin:0;height:calc(100% - 56px);width:100%;transition-duration:.2s;top:56px!important;position:absolute;box-sizing:border-box}}"]],data:{}});function A(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,5,"mat-grid-tile",[["class","mat-grid-tile"]],null,null,null,p.d,p.b)),t.sb(1,49152,[[2,4]],0,m.c,[t.k,[2,m.e]],null,null),(n()(),t.tb(2,0,null,0,3,"mat-card",[["class","dashboard-container full-width mat-card"]],null,null,null,B.b,B.a)),t.sb(3,49152,null,0,f.a,[],null,null),(n()(),t.tb(4,0,null,0,1,"app-database-view",[],null,null,null,d.c,d.b)),t.sb(5,114688,[[1,4]],0,u.a,[h.d,a.a,w.e],{selectedEntry:[0,"selectedEntry"]},null)],function(n,l){n(l,5,0,l.component.selectedEntry)},null)}function C(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,17,"mat-grid-list",[["class","mat-grid-list"],["gutterSize","5px"]],null,null,null,p.c,p.a)),t.sb(1,2211840,null,1,m.a,[t.k,[2,g.b]],{cols:[0,"cols"],gutterSize:[1,"gutterSize"]},null),t.Jb(603979776,2,{_tiles:1}),t.Ib(2048,null,m.e,null,[m.a]),(n()(),t.tb(4,0,null,0,11,"mat-grid-tile",[["class","mat-grid-tile"]],null,null,null,p.d,p.b)),t.sb(5,49152,[[2,4]],0,m.c,[t.k,[2,m.e]],null,null),(n()(),t.tb(6,0,null,0,9,"mat-card",[["class","dashboard-container full-width mat-card"]],null,null,null,B.b,B.a)),t.sb(7,49152,null,0,f.a,[],null,null),(n()(),t.tb(8,0,null,0,5,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.sb(9,16384,null,0,f.g,[],null,null),(n()(),t.Lb(-1,null,["Database Entries "])),(n()(),t.tb(11,0,null,null,2,"button",[["class","float-right"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.createNewEntry()&&t),t},y.b,y.a)),t.sb(12,180224,null,0,S.b,[t.k,x.a,v.h,[2,k.a]],null,null),(n()(),t.Lb(-1,0,["Add Entry "])),(n()(),t.tb(14,0,null,0,1,"app-table-overview",[],null,[[null,"rowSelect"]],function(n,l,e){var t=!0;return"rowSelect"===l&&(t=!1!==n.component.rowSelect(e)&&t),t},D.b,D.a)),t.sb(15,49152,null,0,N.a,[],{dataSource:[0,"dataSource"],columns:[1,"columns"]},{rowSelect:"rowSelect"}),(n()(),t.ib(16777216,null,0,1,null,A)),t.sb(17,16384,null,0,E.l,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.determineScreen(),"5px"),n(l,15,0,e.databaseEntries,e.columns),n(l,17,0,"2"===e.determineScreen())},function(n,l){n(l,11,0,t.Db(l,12).disabled||null,"NoopAnimations"===t.Db(l,12)._animationMode)})}function z(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,15,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),t.sb(1,1720320,null,1,_.c,[],null,null),t.Jb(603979776,3,{_headers:1}),t.Ib(2048,null,_.a,null,[_.c]),(n()(),t.tb(4,16777216,null,null,5,"mat-expansion-panel",[["class","mat-expansion-panel"],["mat-elevation-z",""]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],[[null,"opened"]],function(n,l,e){var t=!0;return"opened"===l&&(t=0!=(n.component.displayView=!1)&&t),t},I.d,I.a)),t.sb(5,1753088,null,1,_.e,[[3,_.a],t.h,V.d,t.Q,E.d,[2,k.a],[2,_.b]],{expanded:[0,"expanded"]},{opened:"opened"}),t.Jb(335544320,4,{_lazyContent:0}),t.Ib(256,null,_.a,void 0,[]),(n()(),t.tb(8,0,null,1,1,"app-table-overview",[],null,[[null,"rowSelect"]],function(n,l,e){var t=!0;return"rowSelect"===l&&(t=!1!==n.component.rowSelect(e)&&t),t},D.b,D.a)),t.sb(9,49152,null,0,N.a,[],{dataSource:[0,"dataSource"],columns:[1,"columns"]},{rowSelect:"rowSelect"}),(n()(),t.tb(10,16777216,null,null,5,"mat-expansion-panel",[["class","mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],[[null,"opened"]],function(n,l,e){var t=!0;return"opened"===l&&(t=0!=(n.component.displayView=!0)&&t),t},I.d,I.a)),t.sb(11,1753088,null,1,_.e,[[3,_.a],t.h,V.d,t.Q,E.d,[2,k.a],[2,_.b]],{expanded:[0,"expanded"]},{opened:"opened"}),t.Jb(335544320,5,{_lazyContent:0}),t.Ib(256,null,_.a,void 0,[]),(n()(),t.tb(14,0,null,1,1,"app-database-view",[],null,[[null,"close"]],function(n,l,e){var t=!0;return"close"===l&&(t=!1!==n.component.closePanel(e)&&t),t},d.c,d.b)),t.sb(15,114688,[[1,4]],0,u.a,[h.d,a.a,w.e],{selectedEntry:[0,"selectedEntry"]},{close:"close"})],function(n,l){var e=l.component;n(l,5,0,!e.displayView),n(l,9,0,e.databaseEntries,e.columns),n(l,11,0,e.displayView),n(l,15,0,e.selectedEntry)},function(n,l){n(l,4,0,t.Db(l,5).expanded,"NoopAnimations"===t.Db(l,5)._animationMode,t.Db(l,5)._hasSpacing()),n(l,10,0,t.Db(l,11).expanded,"NoopAnimations"===t.Db(l,11)._animationMode,t.Db(l,11)._hasSpacing())})}function M(n){return t.Nb(0,[t.Jb(671088640,1,{databaseViewComponent:0}),(n()(),t.ib(16777216,null,null,1,null,C)),t.sb(2,16384,null,0,E.l,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,null,1,null,z)),t.sb(4,16384,null,0,E.l,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,"2"===e.determineScreen()),n(l,4,0,"1"===e.determineScreen())},null)}function L(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,1,"app-container",[],null,null,null,M,j)),t.sb(1,114688,null,0,o,[t.h,a.a],null,null)],function(n,l){n(l,1,0)},null)}var P=t.pb("app-container",o,L,{},{},[]),J=e("M2Lx"),Q=e("Wf4p"),W=e("eDkP"),q=e("uGex"),O=e("ZYjt"),Y=e("jQLj"),F=e("v9Dh"),R=e("OkvK"),Z=e("Wu5U"),G=e("nkVT"),K=e("KBcL"),T=e("PCNd"),H=e("qAlS"),U=e("ZYCi"),X=e("y4qS"),$=e("BHnd"),nn=e("/VYK"),ln=e("seP3"),en=e("b716"),tn=e("4c35"),an=e("kWGw"),un=e("u7R8"),on=e("8mMr"),bn=e("SMsm"),cn=e("LC5p"),rn=e("buN5"),sn=e("YhbO"),dn=e("fAde");e.d(l,"DatabaseModuleNgFactory",function(){return pn});var pn=t.qb(i,[],function(n){return t.Ab([t.Bb(512,t.j,t.db,[[8,[b.a,c.a,r.b,r.a,s.a,d.a,P]],[3,t.j],t.y]),t.Bb(4608,E.n,E.m,[t.v,[2,E.z]]),t.Bb(4608,J.c,J.c,[]),t.Bb(4608,Q.d,Q.d,[]),t.Bb(4608,W.c,W.c,[W.i,W.e,t.j,W.h,W.f,t.r,t.A,E.d,g.b,[2,E.h]]),t.Bb(5120,W.j,W.k,[W.c]),t.Bb(5120,q.a,q.b,[W.c]),t.Bb(4608,O.e,Q.e,[[2,Q.i],[2,Q.n]]),t.Bb(4608,h.d,h.d,[]),t.Bb(4608,h.p,h.p,[]),t.Bb(5120,w.c,w.d,[W.c]),t.Bb(135680,w.e,w.e,[W.c,t.r,[2,E.h],[2,w.b],w.c,[3,w.e],W.e]),t.Bb(4608,Y.i,Y.i,[]),t.Bb(5120,Y.a,Y.b,[W.c]),t.Bb(4608,Q.c,Q.x,[[2,Q.h],x.a]),t.Bb(5120,F.b,F.c,[W.c]),t.Bb(5120,R.d,R.a,[[3,R.d]]),t.Bb(4608,Z.a,Z.a,[]),t.Bb(4608,G.a,G.a,[]),t.Bb(5120,K.a,T.b,[G.a]),t.Bb(1073742336,E.c,E.c,[]),t.Bb(1073742336,g.a,g.a,[]),t.Bb(1073742336,x.b,x.b,[]),t.Bb(1073742336,H.f,H.f,[]),t.Bb(1073742336,U.m,U.m,[[2,U.r],[2,U.k]]),t.Bb(1073742336,Q.n,Q.n,[[2,Q.f],[2,O.f]]),t.Bb(1073742336,Q.w,Q.w,[]),t.Bb(1073742336,S.c,S.c,[]),t.Bb(1073742336,X.p,X.p,[]),t.Bb(1073742336,$.m,$.m,[]),t.Bb(1073742336,Q.o,Q.o,[]),t.Bb(1073742336,m.b,m.b,[]),t.Bb(1073742336,nn.c,nn.c,[]),t.Bb(1073742336,J.d,J.d,[]),t.Bb(1073742336,ln.d,ln.d,[]),t.Bb(1073742336,en.c,en.c,[]),t.Bb(1073742336,f.e,f.e,[]),t.Bb(1073742336,tn.f,tn.f,[]),t.Bb(1073742336,W.g,W.g,[]),t.Bb(1073742336,Q.u,Q.u,[]),t.Bb(1073742336,Q.s,Q.s,[]),t.Bb(1073742336,q.d,q.d,[]),t.Bb(1073742336,an.c,an.c,[]),t.Bb(1073742336,un.e,un.e,[]),t.Bb(1073742336,h.o,h.o,[]),t.Bb(1073742336,h.m,h.m,[]),t.Bb(1073742336,on.b,on.b,[]),t.Bb(1073742336,bn.c,bn.c,[]),t.Bb(1073742336,w.k,w.k,[]),t.Bb(1073742336,v.a,v.a,[]),t.Bb(1073742336,Y.j,Y.j,[]),t.Bb(1073742336,Q.y,Q.y,[]),t.Bb(1073742336,Q.p,Q.p,[]),t.Bb(1073742336,cn.b,cn.b,[]),t.Bb(1073742336,F.e,F.e,[]),t.Bb(1073742336,R.e,R.e,[]),t.Bb(1073742336,rn.a,rn.a,[]),t.Bb(1073742336,sn.c,sn.c,[]),t.Bb(1073742336,_.d,_.d,[]),t.Bb(1073742336,T.a,T.a,[]),t.Bb(1073742336,dn.a,dn.a,[]),t.Bb(1073742336,i,i,[]),t.Bb(256,Q.g,Q.k,[]),t.Bb(1024,U.i,function(){return[[{path:"",component:o}]]},[])])})}}]);