"use strict";var Wt=Object.defineProperty,Kt=Object.defineProperties,Gt=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,ee=(y,m,g)=>m in y?Wt(y,m,{enumerable:!0,configurable:!0,writable:!0,value:g}):y[m]=g,L=(y,m)=>{for(var g in m||(m={}))Xt.call(m,g)&&ee(y,g,m[g]);if(X)for(var g of X(m))en.call(m,g)&&ee(y,g,m[g]);return y},te=(y,m)=>Kt(y,Gt(m));(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[218],{5218:(y,m,g)=>{g.r(m),g.d(m,{AuthModule:()=>Ht});var _=g(6019),u=g(9133),f=g(7617),e=g(3668),c=g(7593),ne=g(4499),d=g(2997),re=g(273),oe=g(461),se=g(3174),p=g(4753),w=g(3067),M=g(7955),T=g(2835),ie=g(6263),k=g(4522);const ae=["*"],x=[],mt={strategies:[],forms:{login:{redirectDelay:500,strategy:"email",rememberMe:!0,showMessages:{success:!0,error:!0},socialLinks:x},register:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},terms:!0,socialLinks:x},requestPassword:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},socialLinks:x},resetPassword:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},socialLinks:x},logout:{redirectDelay:500,strategy:"email"},validation:{password:{required:!0,minLength:4,maxLength:50},email:{required:!0},fullName:{required:!1,minLength:4,maxLength:50}}}},O=new e.OlP("Nebular Auth Options"),F=new e.OlP("Nebular User Auth Options"),R=new e.OlP("Nebular Auth Strategies"),D=new e.OlP("Nebular Auth Tokens"),_t=new e.OlP("Nebular Simple Interceptor Header"),bt=new e.OlP("Nebular Interceptor Filter"),Z=function(...n){if(arguments.length<1||"object"!=typeof arguments[0])return!1;if(arguments.length<2)return arguments[0];const o=arguments[0],t=Array.prototype.slice.call(arguments,1);let r,i;return t.forEach(function(s){"object"!=typeof s||Array.isArray(s)||Object.keys(s).forEach(function(a){if(i=o[a],r=s[a],r!==o)return"object"!=typeof r||null===r?void(o[a]=r):Array.isArray(r)?void(o[a]=V(r)):Y(r)?void(o[a]=Q(r)):"object"!=typeof i||null===i||Array.isArray(i)?void(o[a]=Z({},r)):void(o[a]=Z(i,r))})}),o};function Y(n){return n instanceof Date||n instanceof RegExp}function Q(n){if(n instanceof Date)return new Date(n.getTime());if(n instanceof RegExp)return new RegExp(n);throw new Error("cloneSpecificValue: Unexpected situation")}function V(n){const o=[];return n.forEach(function(t,r){o[r]="object"==typeof t&&null!==t?Array.isArray(t)?V(t):Y(t)?Q(t):Z({},t):t}),o}function C(n={},o,t){const r=o.split(".");let i=Z({},n||{});return r.forEach(s=>{i=i&&void 0!==i[s]?i[s]:void 0}),void 0===i?t:i}class z extends Error{constructor(o){super(o),Object.setPrototypeOf(this,new.target.prototype)}}class q extends Error{constructor(o){super(o),Object.setPrototypeOf(this,new.target.prototype)}}class $ extends q{constructor(o){super(o),Object.setPrototypeOf(this,new.target.prototype)}}function B(n,o,t,r){return new n(o,t,r)}let S=(()=>{class n extends class{constructor(){this.payload=null}getName(){return this.constructor.NAME}getPayload(){return this.payload}}{constructor(t,r,i){super(),this.token=t,this.ownerStrategyName=r,this.createdAt=i;try{this.parsePayload()}catch(s){if(!(s instanceof z))throw s}this.createdAt=this.prepareCreatedAt(i)}parsePayload(){this.payload=null}prepareCreatedAt(t){return t||new Date}getCreatedAt(){return this.createdAt}getValue(){return this.token}getOwnerStrategyName(){return this.ownerStrategyName}isValid(){return!!this.getValue()}toString(){return this.token?this.token:""}}return n.NAME="nb:auth:simple:token",n})(),At=(()=>{class n extends S{constructor(t={},r,i){super((n=>{if("string"==typeof n)try{return JSON.parse(n)}catch(o){}return n})(t),r,i)}getValue(){return this.token.access_token}getRefreshToken(){return this.token.refresh_token}setRefreshToken(t){this.token.refresh_token=t}parsePayload(){if(!this.token)throw new z("Token not found.");if(!Object.keys(this.token).length)throw new $("Cannot extract payload from an empty token.");this.payload=this.token}getType(){return this.token.token_type}isValid(){return super.isValid()&&(!this.getTokenExpDate()||new Date<this.getTokenExpDate())}getTokenExpDate(){return this.token.hasOwnProperty("expires_in")?new Date(this.createdAt.getTime()+1e3*Number(this.token.expires_in)):null}toString(){return JSON.stringify(this.token)}}return n.NAME="nb:auth:oauth2:token",n})();const j=new e.OlP("Nebular Auth Options");let H=(()=>{class n{constructor(t,r){this.fallbackClass=t,this.tokenClasses=r}wrap(t){return JSON.stringify({name:t.getName(),ownerStrategyName:t.getOwnerStrategyName(),createdAt:t.getCreatedAt().getTime(),value:t.toString()})}unwrap(t){let r=this.fallbackClass,i="",s="",a=null;const l=this.parseTokenPack(t);return l&&(r=this.getClassByName(l.name)||this.fallbackClass,i=l.value,s=l.ownerStrategyName,a=new Date(Number(l.createdAt))),B(r,i,s,a)}getClassByName(t){return this.tokenClasses.find(r=>r.NAME===t)}parseTokenPack(t){try{return JSON.parse(t)}catch(r){}return null}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(j),e.LFG(D))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();class E{}let Ot=(()=>{class n extends E{constructor(t){super(),this.parceler=t,this.key="auth_app_token"}get(){const t=localStorage.getItem(this.key);return this.parceler.unwrap(t)}set(t){const r=this.parceler.wrap(t);localStorage.setItem(this.key,r)}clear(){localStorage.removeItem(this.key)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(H))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),W=(()=>{class n{constructor(t){this.tokenStorage=t,this.token$=new ne.X(null),this.publishStoredToken()}tokenChange(){return this.token$.pipe((0,oe.h)(t=>!!t),(0,se.B)())}set(t){return this.tokenStorage.set(t),this.publishStoredToken(),(0,d.of)(null)}get(){const t=this.tokenStorage.get();return(0,d.of)(t)}clear(){return this.tokenStorage.clear(),this.publishStoredToken(),(0,d.of)(null)}publishStoredToken(){this.token$.next(this.tokenStorage.get())}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(E))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),N=(()=>{class n{constructor(t,r){this.tokenService=t,this.strategies=r}getToken(){return this.tokenService.get()}isAuthenticated(){return this.getToken().pipe((0,p.U)(t=>t.isValid()))}isAuthenticatedOrRefresh(){return this.getToken().pipe((0,w.w)(t=>t.getValue()&&!t.isValid()?this.refreshToken(t.getOwnerStrategyName(),t).pipe((0,w.w)(r=>r.isSuccess()?this.isAuthenticated():(0,d.of)(!1))):(0,d.of)(t.isValid())))}onTokenChange(){return this.tokenService.tokenChange()}onAuthenticationChange(){return this.onTokenChange().pipe((0,p.U)(t=>t.isValid()))}authenticate(t,r){return this.getStrategy(t).authenticate(r).pipe((0,w.w)(i=>this.processResultToken(i)))}register(t,r){return this.getStrategy(t).register(r).pipe((0,w.w)(i=>this.processResultToken(i)))}logout(t){return this.getStrategy(t).logout().pipe((0,w.w)(r=>(r.isSuccess()&&this.tokenService.clear().pipe((0,p.U)(()=>r)),(0,d.of)(r))))}requestPassword(t,r){return this.getStrategy(t).requestPassword(r)}resetPassword(t,r){return this.getStrategy(t).resetPassword(r)}refreshToken(t,r){return this.getStrategy(t).refreshToken(r).pipe((0,w.w)(i=>this.processResultToken(i)))}getStrategy(t){const r=this.strategies.find(i=>i.getName()===t);if(!r)throw new TypeError(`There is no Auth Strategy registered under '${t}' name`);return r}processResultToken(t){return t.isSuccess()&&t.getToken()?this.tokenService.set(t.getToken()).pipe((0,p.U)(r=>t)):(0,d.of)(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(W),e.LFG(R))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();class U{setOptions(o){this.options=Z({},this.defaultOptions,o)}getOption(o){return C(this.options,o,null)}createToken(o,t){const r=B(this.getOption("token.class"),o,this.getName());if(t&&!r.isValid())throw new q("Token is empty or invalid.");return r}getName(){return this.getOption("name")}createFailResponse(o){return new k.Zn({body:{},status:401})}createSuccessResponse(o){return new k.Zn({body:{},status:200})}getActionEndpoint(o){const t=this.getOption(`${o}.endpoint`),r=this.getOption("baseEndpoint");return t?r+t:""}getHeaders(){var r;const o=null!=(r=this.getOption("headers"))?r:{};if(o instanceof k.WM)return o;let t=new k.WM;return Object.entries(o).forEach(([i,s])=>{t=t.append(i,s)}),t}}class h{constructor(o,t,r,i,s,a=null){this.success=o,this.response=t,this.redirect=r,this.errors=[],this.messages=[],this.errors=this.errors.concat([i]),i instanceof Array&&(this.errors=i),this.messages=this.messages.concat([s]),s instanceof Array&&(this.messages=s),this.token=a}getResponse(){return this.response}getToken(){return this.token}getRedirect(){return this.redirect}getErrors(){return this.errors.filter(o=>!!o)}getMessages(){return this.messages.filter(o=>!!o)}isSuccess(){return this.success}isFailure(){return!this.success}}class J{}const Mt=new class extends J{constructor(){super(...arguments),this.token={class:S},this.delay=1e3,this.alwaysFail=!1}};let Zt=(()=>{class n extends U{constructor(){super(...arguments),this.defaultOptions=Mt}static setup(t){return[n,t]}authenticate(t){return(0,d.of)(this.createDummyResult(t)).pipe((0,M.g)(this.getOption("delay")))}register(t){return(0,d.of)(this.createDummyResult(t)).pipe((0,M.g)(this.getOption("delay")))}requestPassword(t){return(0,d.of)(this.createDummyResult(t)).pipe((0,M.g)(this.getOption("delay")))}resetPassword(t){return(0,d.of)(this.createDummyResult(t)).pipe((0,M.g)(this.getOption("delay")))}logout(t){return(0,d.of)(this.createDummyResult(t)).pipe((0,M.g)(this.getOption("delay")))}refreshToken(t){return(0,d.of)(this.createDummyResult(t)).pipe((0,M.g)(this.getOption("delay")))}createDummyResult(t){if(this.getOption("alwaysFail"))return new h(!1,this.createFailResponse(t),null,["Something went wrong."]);try{const r=this.createToken("test token",!0);return new h(!0,this.createSuccessResponse(t),"/",[],["Successfully logged in."],r)}catch(r){return new h(!1,this.createFailResponse(t),null,[r.message])}}}return n.\u0275fac=function(){let o;return function(r){return(o||(o=e.n5z(n)))(r||n)}}(),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var A=(()=>{return(n=A||(A={})).CODE="code",n.TOKEN="token",A;var n})(),P=(()=>{return(n=P||(P={})).AUTHORIZATION_CODE="authorization_code",n.PASSWORD="password",n.REFRESH_TOKEN="refresh_token",P;var n})(),v=(()=>{return(n=v||(v={})).NONE="none",n.BASIC="basic",n.REQUEST_BODY="request-body",v;var n})();const vt=new class extends J{constructor(){super(...arguments),this.baseEndpoint="",this.clientId="",this.clientSecret="",this.clientAuthMethod=v.NONE,this.redirect={success:"/",failure:null},this.defaultErrors=["Something went wrong, please try again."],this.defaultMessages=["You have been successfully authenticated."],this.authorize={endpoint:"authorize",responseType:A.CODE,requireValidToken:!0},this.token={endpoint:"token",grantType:P.AUTHORIZATION_CODE,requireValidToken:!0,class:At},this.refresh={endpoint:"token",grantType:P.REFRESH_TOKEN,requireValidToken:!0}}};let qt=(()=>{class n extends U{constructor(t,r,i){super(),this.http=t,this.route=r,this.window=i,this.redirectResultHandlers={[A.CODE]:()=>(0,d.of)(this.route.snapshot.queryParams).pipe((0,w.w)(s=>s.code?this.requestToken(s.code):(0,d.of)(new h(!1,s,this.getOption("redirect.failure"),this.getOption("defaultErrors"),[])))),[A.TOKEN]:()=>{const a=this.getOption("authorize.requireValidToken");return(0,d.of)(this.route.snapshot.fragment).pipe((0,p.U)(l=>this.parseHashAsQueryParams(l)),(0,p.U)(l=>l.error?new h(!1,l,this.getOption("redirect.failure"),this.getOption("defaultErrors"),[]):new h(!0,l,this.getOption("redirect.success"),[],this.getOption("defaultMessages"),this.createToken(l,a))),(0,T.K)(l=>{const b=[];return b.push(l instanceof q?l.message:"Something went wrong."),(0,d.of)(new h(!1,l,this.getOption("redirect.failure"),b))}))}},this.redirectResults={[A.CODE]:()=>(0,d.of)(this.route.snapshot.queryParams).pipe((0,p.U)(s=>!(!s||!s.code&&!s.error))),[A.TOKEN]:()=>(0,d.of)(this.route.snapshot.fragment).pipe((0,p.U)(s=>this.parseHashAsQueryParams(s)),(0,p.U)(s=>!(!s||!s.access_token&&!s.error)))},this.defaultOptions=vt}static setup(t){return[n,t]}get responseType(){return this.getOption("authorize.responseType")}get clientAuthMethod(){return this.getOption("clientAuthMethod")}authenticate(t){return this.getOption("token.grantType")===P.PASSWORD?this.passwordToken(t.email,t.password):this.isRedirectResult().pipe((0,w.w)(r=>r?this.getAuthorizationResult():(this.authorizeRedirect(),(0,d.of)(new h(!0)))))}getAuthorizationResult(){const t=this.redirectResultHandlers[this.responseType];if(t)return t.call(this);throw new Error(`'${this.responseType}' responseType is not supported,\n                      only 'token' and 'code' are supported now`)}refreshToken(t){const r="refresh",i=this.getActionEndpoint(r),s=this.getOption(`${r}.requireValidToken`);return this.http.post(i,this.buildRefreshRequestData(t),{headers:this.getHeaders()}).pipe((0,p.U)(a=>new h(!0,a,this.getOption("redirect.success"),[],this.getOption("defaultMessages"),this.createRefreshedToken(a,t,s))),(0,T.K)(a=>this.handleResponseError(a)))}passwordToken(t,r){const i="token",s=this.getActionEndpoint(i),a=this.getOption(`${i}.requireValidToken`);return this.http.post(s,this.buildPasswordRequestData(t,r),{headers:this.getHeaders()}).pipe((0,p.U)(l=>new h(!0,l,this.getOption("redirect.success"),[],this.getOption("defaultMessages"),this.createToken(l,a))),(0,T.K)(l=>this.handleResponseError(l)))}authorizeRedirect(){this.window.location.href=this.buildRedirectUrl()}isRedirectResult(){return this.redirectResults[this.responseType].call(this)}requestToken(t){const r="token",i=this.getActionEndpoint(r),s=this.getOption(`${r}.requireValidToken`);return this.http.post(i,this.buildCodeRequestData(t),{headers:this.getHeaders()}).pipe((0,p.U)(a=>new h(!0,a,this.getOption("redirect.success"),[],this.getOption("defaultMessages"),this.createToken(a,s))),(0,T.K)(a=>this.handleResponseError(a)))}buildCodeRequestData(t){const r={grant_type:this.getOption("token.grantType"),code:t,redirect_uri:this.getOption("token.redirectUri"),client_id:this.getOption("clientId")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(r)))}buildRefreshRequestData(t){const r={grant_type:this.getOption("refresh.grantType"),refresh_token:t.getRefreshToken(),scope:this.getOption("refresh.scope"),client_id:this.getOption("clientId")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(r)))}buildPasswordRequestData(t,r){const i={grant_type:this.getOption("token.grantType"),username:t,password:r,scope:this.getOption("token.scope")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(i)))}buildAuthHeader(){if(this.clientAuthMethod===v.BASIC){if(this.getOption("clientId")&&this.getOption("clientSecret"))return new k.WM({Authorization:"Basic "+btoa(this.getOption("clientId")+":"+this.getOption("clientSecret"))});throw Error("For basic client authentication method, please provide both clientId & clientSecret.")}}getHeaders(){let t=super.getHeaders();t=t.append("Content-Type","application/x-www-form-urlencoded");const r=this.buildAuthHeader();if(void 0===r)return t;for(const i of r.keys())for(const s of r.getAll(i))t=t.append(i,s);return t}cleanParams(t){return Object.entries(t).forEach(([r,i])=>!i&&delete t[r]),t}addCredentialsToParams(t){if(this.clientAuthMethod===v.REQUEST_BODY){if(this.getOption("clientId")&&this.getOption("clientSecret"))return te(L({},t),{client_id:this.getOption("clientId"),client_secret:this.getOption("clientSecret")});throw Error("For request body client authentication method, please provide both clientId & clientSecret.")}return t}handleResponseError(t){let r=[];return t instanceof k.UA?t.error.error_description?r.push(t.error.error_description):r=this.getOption("defaultErrors"):r.push(t instanceof q?t.message:"Something went wrong."),(0,d.of)(new h(!1,t,this.getOption("redirect.failure"),r,[]))}buildRedirectUrl(){const t=L({response_type:this.getOption("authorize.responseType"),client_id:this.getOption("clientId"),redirect_uri:this.getOption("authorize.redirectUri"),scope:this.getOption("authorize.scope"),state:this.getOption("authorize.state")},this.getOption("authorize.params"));return`${this.getActionEndpoint("authorize")}?${this.urlEncodeParameters(this.cleanParams(t))}`}parseHashAsQueryParams(t){return t?t.split("&").reduce((r,i)=>{const s=i.split("=");return r[s[0]]=decodeURIComponent(s[1]),r},{}):{}}urlEncodeParameters(t){return Object.keys(t).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&")}createRefreshedToken(t,r,i){const s=this.createToken(t,i);return!s.getRefreshToken()&&r.getRefreshToken()&&s.setRefreshToken(r.getRefreshToken()),s}register(t){throw new Error("`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")}requestPassword(t){throw new Error("`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")}resetPassword(t={}){throw new Error("`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")}logout(){return(0,d.of)(new h(!0))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(k.eN),e.LFG(f.gz),e.LFG(c.Q3p))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const St=new class extends J{constructor(){super(...arguments),this.baseEndpoint="/api/auth/",this.login={alwaysFail:!1,endpoint:"login",method:"post",requireValidToken:!0,redirect:{success:"/",failure:null},defaultErrors:["Login/Email combination is not correct, please try again."],defaultMessages:["You have been successfully logged in."]},this.register={alwaysFail:!1,endpoint:"register",method:"post",requireValidToken:!0,redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["You have been successfully registered."]},this.requestPass={endpoint:"request-pass",method:"post",redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["Reset password instructions have been sent to your email."]},this.resetPass={endpoint:"reset-pass",method:"put",redirect:{success:"/",failure:null},resetPasswordTokenKey:"reset_password_token",defaultErrors:["Something went wrong, please try again."],defaultMessages:["Your password has been successfully changed."]},this.logout={alwaysFail:!1,endpoint:"logout",method:"delete",redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["You have been successfully logged out."]},this.refreshToken={endpoint:"refresh-token",method:"post",requireValidToken:!0,redirect:{success:null,failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["Your token has been successfully refreshed."]},this.token={class:S,key:"data.token",getter:(o,t,r)=>C(t.body,r.token.key)},this.errors={key:"data.errors",getter:(o,t,r)=>C(t.error,r.errors.key,r[o].defaultErrors)},this.messages={key:"data.messages",getter:(o,t,r)=>C(t.body,r.messages.key,r[o].defaultMessages)}}};let Rt=(()=>{class n extends U{constructor(t,r){super(),this.http=t,this.route=r,this.defaultOptions=St}static setup(t){return[n,t]}authenticate(t){const r="login",i=this.getOption(`${r}.method`),s=this.getActionEndpoint(r),a=this.getOption(`${r}.requireValidToken`);return this.http.request(i,s,{body:t,observe:"response",headers:this.getHeaders()}).pipe((0,p.U)(l=>{if(this.getOption(`${r}.alwaysFail`))throw this.createFailResponse(t);return l}),(0,p.U)(l=>new h(!0,l,this.getOption(`${r}.redirect.success`),[],this.getOption("messages.getter")(r,l,this.options),this.createToken(this.getOption("token.getter")(r,l,this.options),a))),(0,T.K)(l=>this.handleResponseError(l,r)))}register(t){const r="register",i=this.getOption(`${r}.method`),s=this.getActionEndpoint(r),a=this.getOption(`${r}.requireValidToken`);return this.http.request(i,s,{body:t,observe:"response",headers:this.getHeaders()}).pipe((0,p.U)(l=>{if(this.getOption(`${r}.alwaysFail`))throw this.createFailResponse(t);return l}),(0,p.U)(l=>new h(!0,l,this.getOption(`${r}.redirect.success`),[],this.getOption("messages.getter")(r,l,this.options),this.createToken(this.getOption("token.getter")("login",l,this.options),a))),(0,T.K)(l=>this.handleResponseError(l,r)))}requestPassword(t){const r="requestPass",i=this.getOption(`${r}.method`),s=this.getActionEndpoint(r);return this.http.request(i,s,{body:t,observe:"response",headers:this.getHeaders()}).pipe((0,p.U)(a=>{if(this.getOption(`${r}.alwaysFail`))throw this.createFailResponse();return a}),(0,p.U)(a=>new h(!0,a,this.getOption(`${r}.redirect.success`),[],this.getOption("messages.getter")(r,a,this.options))),(0,T.K)(a=>this.handleResponseError(a,r)))}resetPassword(t={}){const r="resetPass",i=this.getOption(`${r}.method`),s=this.getActionEndpoint(r),a=this.getOption(`${r}.resetPasswordTokenKey`);return t[a]=this.route.snapshot.queryParams[a],this.http.request(i,s,{body:t,observe:"response",headers:this.getHeaders()}).pipe((0,p.U)(l=>{if(this.getOption(`${r}.alwaysFail`))throw this.createFailResponse();return l}),(0,p.U)(l=>new h(!0,l,this.getOption(`${r}.redirect.success`),[],this.getOption("messages.getter")(r,l,this.options))),(0,T.K)(l=>this.handleResponseError(l,r)))}logout(){const t="logout",r=this.getOption(`${t}.method`),i=this.getActionEndpoint(t);return(0,d.of)({}).pipe((0,w.w)(s=>i?this.http.request(r,i,{observe:"response",headers:this.getHeaders()}):(0,d.of)(s)),(0,p.U)(s=>{if(this.getOption(`${t}.alwaysFail`))throw this.createFailResponse();return s}),(0,p.U)(s=>new h(!0,s,this.getOption(`${t}.redirect.success`),[],this.getOption("messages.getter")(t,s,this.options))),(0,T.K)(s=>this.handleResponseError(s,t)))}refreshToken(t){const r="refreshToken",i=this.getOption(`${r}.method`),s=this.getActionEndpoint(r),a=this.getOption(`${r}.requireValidToken`);return this.http.request(i,s,{body:t,observe:"response",headers:this.getHeaders()}).pipe((0,p.U)(l=>{if(this.getOption(`${r}.alwaysFail`))throw this.createFailResponse(t);return l}),(0,p.U)(l=>new h(!0,l,this.getOption(`${r}.redirect.success`),[],this.getOption("messages.getter")(r,l,this.options),this.createToken(this.getOption("token.getter")(r,l,this.options),a))),(0,T.K)(l=>this.handleResponseError(l,r)))}handleResponseError(t,r){let i=[];return t instanceof k.UA?i=this.getOption("errors.getter")(r,t,this.options):i.push(t instanceof q?t.message:"Something went wrong."),(0,d.of)(new h(!1,t,this.getOption(`${r}.redirect.failure`),i))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(k.eN),e.LFG(f.gz))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),It=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nb-auth-block"]],ngContentSelectors:ae,decls:1,vars:0,template:function(t,r){1&t&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;width:100%;max-width:35rem}[_nghost-%COMP%]     form{width:100%}[_nghost-%COMP%]     .label{display:block;margin-bottom:.5rem}[_nghost-%COMP%]     .forgot-password{text-decoration:none;margin-bottom:.5rem}[_nghost-%COMP%]     .caption{margin-top:.5rem}[_nghost-%COMP%]     .alert{text-align:center}[_nghost-%COMP%]     .title{margin-top:0;margin-bottom:.75rem;text-align:center}[_nghost-%COMP%]     .sub-title{margin-bottom:2rem;text-align:center}[_nghost-%COMP%]     .form-control-group{margin-bottom:2rem}[_nghost-%COMP%]     .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}[_nghost-%COMP%]     .label-with-link{display:flex;justify-content:space-between}[_nghost-%COMP%]     .links{text-align:center;margin-top:1.75rem}[_nghost-%COMP%]     .links .socials{margin-top:1.5rem}[_nghost-%COMP%]     .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}[_nghost-%COMP%]     .links .socials a.with-icon{font-size:2rem}[_nghost-%COMP%]     .another-action{margin-top:2rem;text-align:center}[_nghost-%COMP%]     .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}[_nghost-%COMP%]     nb-alert .alert-title, [_nghost-%COMP%]     nb-alert .alert-message{margin:0 0 .5rem}[_nghost-%COMP%]     nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}"]}),n})(),K=(()=>{class n{constructor(t,r){this.auth=t,this.location=r,this.destroy$=new re.x,this.authenticated=!1,this.token="",this.subscription=t.onAuthenticationChange().pipe((0,ie.R)(this.destroy$)).subscribe(i=>{this.authenticated=i})}back(){return this.location.back(),!1}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N),e.Y36(_.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nb-auth"]],decls:10,vars:0,consts:[[1,"navigation"],["href","#","aria-label","Back",1,"link","back-link",3,"click"],["icon","arrow-back"]],template:function(t,r){1&t&&(e.TgZ(0,"nb-layout"),e.TgZ(1,"nb-layout-column"),e.TgZ(2,"nb-card"),e.TgZ(3,"nb-card-header"),e.TgZ(4,"nav",0),e.TgZ(5,"a",1),e.NdJ("click",function(){return r.back()}),e._UZ(6,"nb-icon",2),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"nb-card-body"),e.TgZ(8,"nb-auth-block"),e._UZ(9,"router-outlet"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[c.Aqw,c.dP_,c.Asz,c.ndF,c.fMN,c.yKW,It,f.lC],styles:[".visually-hidden[_ngcontent-%COMP%]{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}.nb-global-scrollblock[_ngcontent-%COMP%]{position:static;width:auto;overflow:hidden}html[_ngcontent-%COMP%]{box-sizing:border-box}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%], [hidden][_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{margin:0;height:calc(100vh - 5rem)}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2rem;vertical-align:middle}[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:flex;width:100%}[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%]{margin:auto}@media (max-width: 767.98px){[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{border-radius:0;height:100vh}}[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]}),n})();function Ft(n,o){const t=[];return n.strategies.forEach(([r,i])=>{const s=o.get(r);s.setOptions(i),t.push(s)}),t}function Dt(n){const o=[];return n.forEach(t=>{o.push(t.getOption("token.class"))}),o}function Yt(n){return Z(mt,n)}function Qt(n){return!0}let Vt=(()=>{class n{static forRoot(t){return{ngModule:n,providers:[{provide:F,useValue:t},{provide:O,useFactory:Yt,deps:[F]},{provide:R,useFactory:Ft,deps:[O,e.zs3]},{provide:D,useFactory:Dt,deps:[R]},{provide:j,useValue:S},{provide:_t,useValue:"Authorization"},{provide:bt,useValue:Qt},{provide:E,useClass:Ot},H,N,W,Zt,Rt,qt]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,c.BW0,c.zyh,c.MfT,c.PYG,c.nKr,c.T2N,f.Bz,u.u5,c.KdK]]}),n})();var zt=g(7079);function $t(n,o){1&n&&(e.TgZ(0,"nb-alert",10),e.TgZ(1,"p",11),e.TgZ(2,"b"),e._uU(3,"Incorrect username or password."),e.qZA(),e.qZA(),e.qZA())}const Bt=[{path:"",component:K,children:[{path:"login",component:(()=>{class n{constructor(t,r,i,s){this.authService=t,this.route=r,this.formBuilder=i,this.router=s}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl,this.returnUrl||this.route.params.subscribe(t=>this.returnUrl=t.returnUrl),console.log(this.returnUrl),this.loginForm=this.formBuilder.group({username:["",u.kI.required],password:["",u.kI.required]})}login(){this.authService.login(this.loginForm.value).subscribe({next:t=>{localStorage.setItem("token",t.token),this.returnUrl?this.router.navigate([this.returnUrl]).catch():this.router.navigate(["pages/home"]).catch()},error:t=>{console.log(t),this.error=!0}})}onRegister(){this.router.navigate(["auth/register",{returnUrl:this.returnUrl}]).catch()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(zt.e),e.Y36(f.gz),e.Y36(u.qu),e.Y36(f.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ngx-login"]],decls:14,vars:2,consts:[[2,"display","flex","flex-direction","column","align-items","center"],["outline","danger","role","alert",4,"ngIf"],["aria-labelledby","title",1,"center-flex-col",3,"formGroup","ngSubmit"],["src","assets/clinic_logo_text.jpg","alt","logo",1,"login-logo"],[1,"form-control-group","full-width"],["for","input-email",1,"label"],["nbInput","","fullWidth","","formControlName","username","name","email","id","input-email","placeholder","Username","fieldSize","large","autofocus","","autocomplete","on","required","required"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","autocomplete","on","formControlName","password","id","input-password","placeholder","password","required","required"],["nbButton","","fullWidth","","status","primary","size","large"],["outline","danger","role","alert"],[1,"alert-title"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,$t,4,0,"nb-alert",1),e.TgZ(2,"form",2),e.NdJ("ngSubmit",function(){return r.login()}),e._UZ(3,"img",3),e.TgZ(4,"div",4),e.TgZ(5,"label",5),e._uU(6,"Username:"),e.qZA(),e._UZ(7,"input",6),e.qZA(),e.TgZ(8,"div",4),e.TgZ(9,"label",7),e._uU(10,"Password:"),e.qZA(),e._UZ(11,"input",8),e.qZA(),e.TgZ(12,"button",9),e._uU(13," Log In "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",r.error),e.xp6(1),e.Q6J("formGroup",r.loginForm))},directives:[_.O5,u._Y,u.JL,u.sg,c.h8i,u.Fj,u.JJ,u.u,u.Q7,c.DPz,c.$9b],styles:[".login-logo[_ngcontent-%COMP%]{margin-bottom:30px}.full-width[_ngcontent-%COMP%]{width:100%}"]}),n})()}]},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login"}];let jt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.Bz.forChild(Bt)],f.Bz]}),n})(),Ht=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,u.u5,f.Bz,jt,Vt.forRoot(),c.PYG,c.nKr,c.T2N,u.UX,c.zyh]]}),n})()}}]);