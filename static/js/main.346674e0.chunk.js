(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{334:function(e,t){},335:function(e,t){},343:function(e,t){},346:function(e,t){},347:function(e,t){},348:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(401),o=n(6),i=n.n(o),c=n(51),u=n.n(c),s=n(57),l=n(5),f=n(394),d=n(404),b=n(396),g=n(397),p=n(351),m=n(287),j=n.n(m),h=n(288),v=n.n(h),O=n(4),x=n.n(O),E=n(12);function R(e,t,n){var r=Math.min(t,n),a=(t-r)/2,o=(n-r)/2,i=document.createElement("canvas");return i.width=63,i.height=63,i.getContext("2d").drawImage(e,a,o,r,r,0,0,i.width,i.height),new Promise((function(e){return i.toBlob((function(t){return e(t)}))}))}var C=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){var t=new Image;t.src=e,t.onload=Object(E.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,t.naturalWidth,t.naturalHeight);case 2:n=e.sent,a(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]},_=n(395),T=n(26),F=n(390);var y=Object(f.a)((function(e){return Object(d.a)({root:{padding:0,minWidth:e.spacing(7)+2,height:e.spacing(7)+2,width:e.spacing(7)+2,marginRight:e.spacing(1),marginBottom:e.spacing(1),border:"2px solid transparent",alignItems:"stretch",transitionProperty:"transform, border-color",transitionDuration:"".concat(e.transitions.duration.shorter,"ms"),transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{transform:"scale(1.125)"}},active:{borderColor:e.palette.primary.main,transform:"scale(1.125)"}})})),k=function(e){var t=y();return Object(r.jsx)(F.a,{className:Object(T.a)(t.root,e.active&&t.active),disabled:e.disabled,onClick:e.onClick,children:e.children})};var A=Object(f.a)((function(e){return Object(d.a)({scalableContent:{width:"calc(100% + 2px)",height:"calc(100% + 2px)",margin:-1,borderRadius:e.shape.borderRadius},image:{objectFit:"cover"}})})),w=function(e){var t=A();return Object(r.jsxs)(k,{active:!!e.thumbnailUrl&&e.active,disabled:!e.thumbnailUrl,onClick:e.onClick,children:[e.thumbnailUrl?Object(r.jsx)("img",{className:Object(T.a)(t.scalableContent,t.image),src:e.thumbnailUrl,alt:"",onLoad:e.onLoad}):Object(r.jsx)(_.a,{className:t.scalableContent,variant:"rect"}),e.children]})};var S=function(e){var t=C(e.imageUrl),n=Object(l.a)(t,2),a=n[0],o=n[1];return Object(r.jsx)(w,{thumbnailUrl:a,active:e.active,onClick:e.onClick,onLoad:o})};var U=Object(f.a)((function(e){return Object(d.a)({root:{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:e.shape.borderRadius,margin:-1,boxSizing:"content-box",display:"flex",justifyContent:"center",alignItems:"center"}})})),P=function(e){var t=U();return Object(r.jsx)(k,{active:e.active,onClick:e.onClick,children:Object(r.jsx)("div",{className:t.root,children:e.children})})},D=["architecture-5082700_1280","porch-691330_1280","saxon-switzerland-539418_1280","shibuyasky-4768679_1280"].map((function(e){return"".concat("/virtual-background","/backgrounds/").concat(e,".jpg")}));var B=Object(f.a)((function(e){return Object(d.a)({root:{flex:1}})})),M=function(e){var t=B();return Object(r.jsx)(b.a,{className:t.root,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Background"}),Object(r.jsx)(P,{active:"none"===e.background.type,onClick:function(){return e.onChange({type:"none"})},children:Object(r.jsx)(j.a,{})}),Object(r.jsx)(P,{active:"blur"===e.background.type,onClick:function(){return e.onChange({type:"blur"})},children:Object(r.jsx)(v.a,{})}),D.map((function(t){return Object(r.jsx)(S,{imageUrl:t,active:t===e.background.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)}))]})})},I=n(67),L=n(398),N=n(405),W=n(403);var X=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Post-processing"}),"webgl2"===e.pipeline?Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,children:"Joint bilateral filter"}),Object(r.jsx)(p.a,{variant:"body2",children:"Sigma space"}),Object(r.jsx)(N.a,{value:e.config.jointBilateralFilter.sigmaSpace,min:0,max:10,step:.1,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(I.a)(Object(I.a)({},e.config),{},{jointBilateralFilter:Object(I.a)(Object(I.a)({},e.config.jointBilateralFilter),{},{sigmaSpace:n})}))}}),Object(r.jsx)(p.a,{variant:"body2",children:"Sigma color"}),Object(r.jsx)(N.a,{value:e.config.jointBilateralFilter.sigmaColor,min:0,max:1,step:.01,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(I.a)(Object(I.a)({},e.config),{},{jointBilateralFilter:Object(I.a)(Object(I.a)({},e.config.jointBilateralFilter),{},{sigmaColor:n})}))}})]}):Object(r.jsx)(L.a,{label:"Smooth segmentation mask",control:Object(r.jsx)(W.a,{color:"primary",checked:e.config.smoothSegmentationMask,onChange:function(t){e.onChange(Object(I.a)(Object(I.a)({},e.config),{},{smoothSegmentationMask:t.target.checked}))}})})]})})},H=n(399),G=n(406),V=n(407),z=n(402);var Y=Object(f.a)((function(e){return Object(d.a)({root:Object(s.a)({},e.breakpoints.only("md"),{gridColumnStart:2,gridRowStart:2}),formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:120}})})),q=function(e){var t=Y();return Object(r.jsx)(b.a,{className:t.root,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Segmentation"}),Object(r.jsxs)(H.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(G.a,{children:"Model"}),Object(r.jsxs)(z.a,{label:"Model",value:e.config.model,onChange:function(t){var n=t.target.value,r=e.config.inputResolution;"meet"===n&&"360p"===r&&(r="144p");var a=e.config.pipeline;"bodyPix"===n&&"webgl2"===a&&(a="canvas2dCpu"),e.onChange(Object(I.a)(Object(I.a)({},e.config),{},{model:n,inputResolution:r,pipeline:a}))},children:[Object(r.jsx)(V.a,{value:"meet",children:"Meet"}),Object(r.jsx)(V.a,{value:"bodyPix",children:"BodyPix"})]})]}),Object(r.jsxs)(H.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(G.a,{children:"Input resolution"}),Object(r.jsxs)(z.a,{label:"Input resolution",value:e.config.inputResolution,onChange:function(t){e.onChange(Object(I.a)(Object(I.a)({},e.config),{},{inputResolution:t.target.value}))},children:[Object(r.jsx)(V.a,{value:"360p",disabled:"meet"===e.config.model,children:"360p"}),Object(r.jsx)(V.a,{value:"144p",children:"144p"}),Object(r.jsx)(V.a,{value:"96p",children:"96p"})]})]}),Object(r.jsxs)(H.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(G.a,{children:"Pipeline"}),Object(r.jsxs)(z.a,{label:"Pipeline",value:e.config.pipeline,onChange:function(t){e.onChange(Object(I.a)(Object(I.a)({},e.config),{},{pipeline:t.target.value}))},children:[Object(r.jsx)(V.a,{value:"webgl2",disabled:"bodyPix"===e.config.model,children:"WebGL 2 (WIP)"}),Object(r.jsx)(V.a,{value:"canvas2dCpu",children:"Canvas 2D + CPU"})]})]})]})})},J=n(290),K=n.n(J),Q=n(289),Z=n.n(Q);var $=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){var t=document.createElement("video");t.src=e,t.onloadedmetadata=function(){t.currentTime=t.duration/2},t.onseeked=Object(E.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,t.videoWidth,t.videoHeight);case 2:n=e.sent,a(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]};var ee=Object(f.a)((function(e){return Object(d.a)({icon:{position:"absolute",bottom:0,right:0,color:e.palette.common.white}})})),te=function(e){var t=ee(),n=$(e.videoUrl),a=Object(l.a)(n,2),o=a[0],i=a[1];return Object(r.jsx)(w,{thumbnailUrl:o,active:e.active,onClick:e.onClick,onLoad:i,children:Object(r.jsx)(Z.a,{className:t.icon})})},ne=["girl-919048_1280","doctor-5871743_640","woman-5883428_1280"].map((function(e){return"".concat("/virtual-background","/images/").concat(e,".jpg")})),re=["Dance - 32938","Doctor - 26732","Thoughtful - 35590"].map((function(e){return"".concat("/virtual-background","/videos/").concat(e,".mp4")}));var ae=Object(f.a)((function(e){return Object(d.a)({root:{flex:1}})})),oe=function(e){var t=ae();return Object(r.jsx)(b.a,{className:t.root,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Source"}),Object(r.jsx)(P,{active:"camera"===e.source.type,onClick:function(){return e.onChange({type:"camera"})},children:Object(r.jsx)(K.a,{})}),ne.map((function(t){return Object(r.jsx)(S,{imageUrl:t,active:t===e.source.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)})),re.map((function(t){return Object(r.jsx)(te,{videoUrl:t,active:t===e.source.url,onClick:function(){return e.onChange({type:"video",url:t})}},t)}))]})})},ie=n(408),ce=n(350),ue={"360p":[640,360],"144p":[256,144],"96p":[160,96]};function se(e,t,n,r,a,o,i,c){var u=n.getContext("2d"),s=Object(l.a)(ue[o.inputResolution],2),f=s[0],d=s[1],b=f*d,g=new ImageData(f,d),p=document.createElement("canvas");p.width=f,p.height=d;var m=p.getContext("2d"),j=a._getInputMemoryOffset()/4,h=a._getOutputMemoryOffset()/4;function v(){return(v=Object(E.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==t.type&&O(),c(),"none"===t.type){e.next=9;break}if("bodyPix"!==o.model){e.next=8;break}return e.next=6,R();case 6:e.next=9;break;case 8:_();case 9:c(),T();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){if(m.drawImage(e.htmlElement,0,0,e.width,e.height,0,0,f,d),"meet"===o.model)for(var t=m.getImageData(0,0,f,d),n=0;n<b;n++)a.HEAPF32[j+3*n]=t.data[4*n]/255,a.HEAPF32[j+3*n+1]=t.data[4*n+1]/255,a.HEAPF32[j+3*n+2]=t.data[4*n+2]/255}function R(){return C.apply(this,arguments)}function C(){return(C=Object(E.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.segmentPerson(p);case 2:for(t=e.sent,n=0;n<b;n++)g.data[4*n+3]=t.data[n]?255:0;m.putImageData(g,0,0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){a._runInference();for(var e=0;e<b;e++){var t=a.HEAPF32[h+2*e],n=a.HEAPF32[h+2*e+1],r=Math.max(t,n),o=Math.exp(t-r),i=Math.exp(n-r);g.data[4*e+3]=255*i/(o+i)}m.putImageData(g,0,0)}function T(){u.globalCompositeOperation="copy",u.filter="none",i.smoothSegmentationMask&&("blur"===t.type?u.filter="blur(8px)":"image"===t.type&&(u.filter="blur(4px)")),"none"!==t.type&&(u.drawImage(p,0,0,f,d,0,0,e.width,e.height),u.globalCompositeOperation="source-in",u.filter="none"),u.drawImage(e.htmlElement,0,0),"blur"===t.type&&(u.globalCompositeOperation="destination-over",u.filter="blur(8px)",u.drawImage(e.htmlElement,0,0))}return{render:function(){return v.apply(this,arguments)},cleanUp:function(){}}}var le=n(94),fe=String.raw;function de(e,t,n,r,a){var o=function(e,t,n){var r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error("Could not link WebGL program: ".concat(e.getProgramInfoLog(r)));return r}(e,t,n),i=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,r),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);var c=e.getAttribLocation(o,"a_texCoord");return e.enableVertexAttribArray(c),e.bindBuffer(e.ARRAY_BUFFER,a),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0),o}function be(e,t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error("Could not compile shader: ".concat(e.getShaderInfoLog(r)));return r}function ge(e,t,n,r){var a=e.createTexture();return e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texStorage2D(e.TEXTURE_2D,1,t,n,r),a}function pe(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_personMask;\n    uniform sampler2D u_background;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    vec3 screen(vec3 a, vec3 b) {\n      return 1.0 - (1.0 - a) * (1.0 - b);\n    }\n\n    vec3 linearDodge(vec3 a, vec3 b) {\n      return a + b;\n    }\n\n    void main() {\n      vec3 frameColor = texture(u_inputFrame, v_texCoord).rgb;\n      vec3 backgroundColor = texture(u_background, v_texCoord).rgb;\n      float personMask = texture(u_personMask, v_texCoord).a;\n      float edge = smoothstep(1.0, 0.5, personMask);\n      personMask = smoothstep(0.5, 1.0, personMask);\n      vec3 lightWrap = backgroundColor * edge * 0.4;\n      // TODO Switch between screen and linearDodge based on use configuration\n      vec3 person = screen(frameColor, lightWrap);\n      outColor = vec4(person * personMask + backgroundColor * (1.0 - personMask), 1.0);\n    }\n  "]);return pe=function(){return e},e}function me(){var e=Object(le.a)(["#version 300 es\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    out vec2 v_texCoord;\n\n    void main() {\n      // Flipping Y is required when rendering to canvas\n      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "]);return me=function(){return e},e}function je(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_segmentationMask;\n    uniform vec2 u_texelSize;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    const float sigmaSpace = ",";\n    const float sigmaColor = ",";\n\n    const float kSparsityFactor = 0.66;  // Higher is more sparse.\n    const float sparsity = max(1.0, sqrt(sigmaSpace) * kSparsityFactor);\n    const float step = sparsity;\n    const float radius = sigmaSpace;\n    const float offset = (step > 1.0) ? (step * 0.5) : (0.0);\n\n    float gaussian(float x, float sigma) {\n      float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);\n      return exp((x * x) * coeff);\n    }\n\n    void main() {\n      vec2 centerCoord = v_texCoord;\n      vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;\n      float newVal = 0.0;\n\n      float spaceWeight = 0.0;\n      float colorWeight = 0.0;\n      float totalWeight = 0.0;\n\n      float sigmaTexel = max(u_texelSize.x, u_texelSize.y) * sigmaSpace;\n\n      // Subsample kernel space.\n      for (float i = -radius + offset; i <= radius; i += step) {\n        for (float j = -radius + offset; j <= radius; j += step) {\n          vec2 shift = vec2(j, i) * u_texelSize;\n          vec2 coord = vec2(centerCoord + shift);\n          vec3 frameColor = texture(u_inputFrame, coord).rgb;\n          float outVal = texture(u_segmentationMask, coord).a;\n\n          spaceWeight = gaussian(distance(centerCoord, coord), sigmaTexel);\n          colorWeight = gaussian(distance(centerColor, frameColor), sigmaColor);\n          totalWeight += spaceWeight * colorWeight;\n\n          newVal += spaceWeight * colorWeight * outVal;\n        }\n      }\n      newVal /= totalWeight;\n\n      outColor = vec4(vec3(0.0), newVal);\n    }\n  "]);return je=function(){return e},e}function he(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    void main() {\n      outColor = texture(u_inputFrame, v_texCoord);\n    }\n  "]);return he=function(){return e},e}function ve(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputSegmentation;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    void main() {\n      vec2 segmentation = texture(u_inputSegmentation, v_texCoord).rg;\n      float shift = max(segmentation.r, segmentation.g);\n      float backgroundExp = exp(segmentation.r - shift);\n      float personExp = exp(segmentation.g - shift);\n      outColor = vec4(vec3(0.0), personExp / (backgroundExp + personExp));\n    }\n  "]);return ve=function(){return e},e}function Oe(){var e=Object(le.a)(["#version 300 es\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    out vec2 v_texCoord;\n\n    void main() {\n      gl_Position = vec4(a_position, 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "]);return Oe=function(){return e},e}function xe(e,t,n,r,a,o,i){var c=fe(Oe()),u=e.width,s=e.height,f=Object(l.a)(ue[a.inputResolution],2),d=f[0],b=f[1],g=n.getContext("webgl2");g.getExtension("EXT_color_buffer_float");var p=be(g,g.VERTEX_SHADER,c),m=g.createVertexArray();g.bindVertexArray(m);var j=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,j),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW);var h=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,h),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),g.STATIC_DRAW);var v=ge(g,g.RGBA8,u,s),O=ge(g,g.RGBA8,d,b),R=ge(g,g.RGBA8,u,s),C=function(e,t,n,r,a,o){var i=fe(he()),c=o._getInputMemoryOffset()/4,u=Object(l.a)(ue[a.inputResolution],2),s=u[0],f=u[1],d=s*f,b=be(e,e.FRAGMENT_SHADER,i),g=de(e,t,b,n,r),p=e.getUniformLocation(g,"u_inputFrame"),m=ge(e,e.RGBA32F,s,f),j=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,j),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,m,0);var h=new Float32Array(4*d);return{render:function(){e.useProgram(g),e.uniform1i(p,0),e.bindFramebuffer(e.FRAMEBUFFER,j),e.viewport(0,0,s,f),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.readPixels(0,0,s,f,e.RGBA,e.FLOAT,h);for(var t=0;t<d;t++){var n=c+3*t,r=4*t;o.HEAPF32[n]=h[r],o.HEAPF32[n+1]=h[r+1],o.HEAPF32[n+2]=h[r+2]}},cleanUp:function(){e.deleteFramebuffer(j),e.deleteTexture(m),e.deleteProgram(g),e.deleteShader(b)}}}(g,p,j,h,a,r),_=function(e,t,n,r,a,o,i){var c=fe(ve()),u=o._getOutputMemoryOffset()/4,s=Object(l.a)(ue[a.inputResolution],2),f=s[0],d=s[1],b=be(e,e.FRAGMENT_SHADER,c),g=de(e,t,b,n,r),p=e.getUniformLocation(g,"u_inputSegmentation"),m=ge(e,e.RG32F,f,d),j=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,j),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),{render:function(){e.useProgram(g),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,m),e.texSubImage2D(e.TEXTURE_2D,0,0,0,f,d,e.RG,e.FLOAT,o.HEAPF32,u),e.uniform1i(p,1),e.bindFramebuffer(e.FRAMEBUFFER,j),e.viewport(0,0,f,d),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteFramebuffer(j),e.deleteTexture(m),e.deleteProgram(g),e.deleteShader(b)}}}(g,p,j,h,a,r,O),T=function(e,t,n,r,a,o,i,c,u){var s=Object(l.a)(ue[o.inputResolution],2),f=s[0],d=s[1],b=u.width,g=u.height,p=i.jointBilateralFilter,m=p.sigmaSpace,j=p.sigmaColor;m*=Math.max(b/f,g/d);var h=fe(je(),m.toFixed(2),j.toFixed(2)),v=1/b,O=1/g,x=be(e,e.FRAGMENT_SHADER,h),E=de(e,t,x,n,r),R=e.getUniformLocation(E,"u_inputFrame"),C=e.getUniformLocation(E,"u_segmentationMask"),_=e.getUniformLocation(E,"u_texelSize"),T=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,T),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),{render:function(){e.useProgram(E),e.uniform1i(R,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a),e.uniform1i(C,1),e.uniform2f(_,v,O),e.bindFramebuffer(e.FRAMEBUFFER,T),e.viewport(0,0,b,g),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteFramebuffer(T),e.deleteProgram(E),e.deleteShader(x)}}}(g,p,j,h,O,a,o,R,n),F=function(e,t,n,r,a,o){var i=fe(me()),c=fe(pe()),u=o.width,s=o.height,l=be(e,e.VERTEX_SHADER,i),f=be(e,e.FRAGMENT_SHADER,c),d=de(e,l,f,t,n),b=e.getUniformLocation(d,"u_inputFrame"),g=e.getUniformLocation(d,"u_personMask"),p=e.getUniformLocation(d,"u_background"),m=null;return(null===a||void 0===a?void 0:a.complete)?(m=ge(e,e.RGBA8,a.naturalWidth,a.naturalHeight),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,a)):a&&(a.onload=function(){m=ge(e,e.RGBA8,a.naturalWidth,a.naturalHeight),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,a)}),{render:function(){e.useProgram(d),e.uniform1i(b,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,r),e.uniform1i(g,1),null!==m&&(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,m),e.uniform1i(p,2)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,u,s),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteTexture(m),e.deleteProgram(d),e.deleteShader(f),e.deleteShader(l)}}}(g,j,h,R,t,n);function y(){return(y=Object(E.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,v),g.texSubImage2D(g.TEXTURE_2D,0,0,0,g.RGBA,g.UNSIGNED_BYTE,e.htmlElement),g.bindVertexArray(m),C.render(),i(),r._runInference(),i(),_.render(),T.render(),F.render();case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{render:function(){return y.apply(this,arguments)},cleanUp:function(){F.cleanUp(),T.cleanUp(),_.cleanUp(),C.cleanUp(),g.deleteTexture(R),g.deleteTexture(O),g.deleteTexture(v),g.deleteBuffer(h),g.deleteBuffer(j),g.deleteVertexArray(m),g.deleteShader(p)}}}var Ee=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)([]),i=Object(l.a)(a,2),c=i[0],u=i[1],s=Object(o.useRef)(0),f=Object(o.useRef)(0),d=Object(o.useRef)([]),b=Object(o.useRef)(0),g=Object(o.useRef)(0);return{fps:n,durations:c,beginFrame:Object(o.useCallback)((function(){f.current=Date.now()}),[]),addFrameEvent:Object(o.useCallback)((function(){var e=Date.now();d.current[b.current]=e-f.current,f.current=e,b.current++}),[]),endFrame:Object(o.useCallback)((function(){var e=Date.now();d.current[b.current]=e-f.current,g.current++,e>=s.current+1e3&&(r(1e3*g.current/(e-s.current)),u(d.current),s.current=e,g.current=0),b.current=0}),[])}};var Re=function(e,t,n,r,a,i){var c=Object(o.useRef)(null),u=Object(o.useRef)(null),s=Ee(),l=s.fps,f=s.durations,d=s.beginFrame,b=s.addFrameEvent,g=s.endFrame;return Object(o.useEffect)((function(){var o,s=!0,l="webgl2"===a.pipeline?xe(e,u.current,c.current,r,a,i,b):se(e,t,c.current,n,r,a,i,b);function f(){return p.apply(this,arguments)}function p(){return(p=Object(E.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:return d(),e.next=5,l.render();case 5:g(),o=requestAnimationFrame(f);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return f(),console.log("Animation started:",e,t,a,i),function(){s=!1,cancelAnimationFrame(o),l.cleanUp(),console.log("Animation stopped:",e,t,a,i)}}),[e,t,n,r,a,i,d,b,g]),{canvasRef:c,backgroundImageRef:u,fps:l,durations:f}};var Ce=Object(f.a)((function(e){return Object(d.a)({root:{flex:1,position:"relative"},render:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},stats:{position:"absolute",top:0,right:0,left:0,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.48)",color:e.palette.common.white}})})),_e=function(e){var t=Ce(),n=Re(e.sourcePlayback,e.background,e.bodyPix,e.tflite,e.segmentationConfig,e.postProcessingConfig),a=n.canvasRef,o=n.backgroundImageRef,i=n.fps,c=Object(l.a)(n.durations,3),u=c[0],s=c[1],f=c[2],d=["resizing ".concat(u,"ms"),"inference ".concat(s,"ms"),"post-processing ".concat(f,"ms")],b="".concat(Math.round(i)," fps (").concat(d.join(", "),")");return Object(r.jsxs)("div",{className:t.root,children:["image"===e.background.type&&Object(r.jsx)("img",{ref:o,className:t.render,src:e.background.url,alt:"",hidden:"webgl2"===e.segmentationConfig.pipeline}),Object(r.jsx)("canvas",{ref:a,className:t.render,width:e.sourcePlayback.width,height:e.sourcePlayback.height},e.segmentationConfig.pipeline),Object(r.jsx)(p.a,{className:t.stats,variant:"caption",children:b})]})},Te=n(400),Fe=n(291),ye=n.n(Fe);var ke=Object(f.a)((function(e){var t;return Object(d.a)({root:(t={position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},Object(s.a)(t,e.breakpoints.down("xs"),{width:0,overflow:"hidden"}),Object(s.a)(t,e.breakpoints.up("sm"),{flex:1,borderRightWidth:1,borderRightStyle:"solid",borderRightColor:e.palette.divider}),t),sourcePlayback:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}})})),Ae=function(e){var t=ke(),n=Object(o.useState)(),a=Object(l.a)(n,2),i=a[0],c=a[1],u=Object(o.useState)(!1),s=Object(l.a)(u,2),f=s[0],d=s[1],b=Object(o.useState)(!1),g=Object(l.a)(b,2),p=g[0],m=g[1],j=Object(o.useRef)(null);return Object(o.useEffect)((function(){c(void 0),d(!0),m(!1),setTimeout((function(){return c(e.source.url)}))}),[e.source]),Object(o.useEffect)((function(){function t(){return(t=Object(E.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={video:!0},e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:if(n=e.sent,!j.current){e.next=8;break}return j.current.srcObject=n,e.abrupt("return");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error opening video camera.",e.t0);case 13:d(!1),m(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}"camera"===e.source.type?function(){t.apply(this,arguments)}():j.current&&(j.current.srcObject=null)}),[e.source]),Object(r.jsxs)("div",{className:t.root,children:[f&&Object(r.jsx)(Te.a,{}),"image"===e.source.type?Object(r.jsx)("img",{className:t.sourcePlayback,src:i,hidden:f,alt:"",onLoad:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.naturalWidth,height:n.naturalHeight}),d(!1)}}):p?Object(r.jsx)(ye.a,{fontSize:"large"}):Object(r.jsx)("video",{ref:j,className:t.sourcePlayback,src:i,hidden:f,autoPlay:!0,playsInline:!0,controls:!1,muted:!0,loop:!0,onLoadedData:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.videoWidth,height:n.videoHeight}),d(!1)}})]})};var we=Object(f.a)((function(e){var t,n=["".concat(e.spacing(52),"px"),"100vh - ".concat(e.spacing(2),"px")];return Object(d.a)({root:(t={minHeight:"calc(min(".concat(n.join(", "),"))"),display:"flex",overflow:"hidden"},Object(s.a)(t,e.breakpoints.up("md"),{gridColumnStart:1,gridColumnEnd:3}),Object(s.a)(t,e.breakpoints.up("lg"),{gridRowStart:1,gridRowEnd:3}),t),noOutput:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:e.spacing(20),height:e.spacing(20)}})})),Se=function(e){var t=we(),n=Object(o.useState)(),a=Object(l.a)(n,2),i=a[0],c=a[1];return Object(o.useEffect)((function(){c(void 0)}),[e.source]),Object(r.jsxs)(ce.a,{className:t.root,children:[Object(r.jsx)(Ae,{source:e.source,onLoad:c}),i&&e.bodyPix&&e.tflite?Object(r.jsx)(_e,{sourcePlayback:i,background:e.background,bodyPix:e.bodyPix,tflite:e.tflite,segmentationConfig:e.segmentationConfig,postProcessingConfig:e.postProcessingConfig}):Object(r.jsx)("div",{className:t.noOutput,children:Object(r.jsx)(ie.a,{className:t.avatar})})]})},Ue=n(292),Pe=n(312);var De=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(E.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,Pe.a();case 3:return e.t0=r,e.next=6,Ue.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Be=function(e,t){var n=Object(o.useState)(!1),r=Object(l.a)(n,2),a=r[0],i=r[1];return Object(o.useEffect)((function(){function n(){return(n=Object(E.a)(x.a.mark((function n(){var r,a,o,c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&"meet"===t.model){n.next=2;break}return n.abrupt("return");case 2:return i(!1),r="144p"===t.inputResolution?"segm_full_v679":"segm_lite_v681",console.log("Loading meet model:",r),n.next=7,fetch("".concat("/virtual-background","/models/").concat(r,".tflite"));case 7:return a=n.sent,n.next=10,a.arrayBuffer();case 10:o=n.sent,console.log("Model buffer size:",o.byteLength),c=e._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",c),console.log("Loading model buffer..."),e.HEAPU8.set(new Uint8Array(o),c),console.log("_loadModel result:",e._loadModel(o.byteLength)),console.log("Input memory offset:",e._getInputMemoryOffset()),console.log("Input height:",e._getInputHeight()),console.log("Input width:",e._getInputWidth()),console.log("Input channels:",e._getInputChannelCount()),console.log("Output memory offset:",e._getOutputMemoryOffset()),console.log("Output height:",e._getOutputHeight()),console.log("Output width:",e._getOutputWidth()),console.log("Output channels:",e._getOutputChannelCount()),i(!0);case 26:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e,t]),a};var Me=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(E.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,createTFLiteModule();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Ie=Object(f.a)((function(e){var t;return Object(d.a)({root:(t={display:"grid"},Object(s.a)(t,e.breakpoints.up("xs"),{margin:e.spacing(1),gap:e.spacing(1),gridTemplateColumns:"1fr"}),Object(s.a)(t,e.breakpoints.up("md"),{margin:e.spacing(2),gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)"}),Object(s.a)(t,e.breakpoints.up("lg"),{gridTemplateColumns:"repeat(3, 1fr)"}),t),resourceSelectionCards:{display:"flex",flexDirection:"column"}})})),Le=function(){var e=De(),t=Me(),n=Ie(),a=Object(o.useState)({type:"image",url:ne[0]}),i=Object(l.a)(a,2),c=i[0],u=i[1],s=Object(o.useState)({type:"image",url:D[0]}),f=Object(l.a)(s,2),d=f[0],b=f[1],g=Object(o.useState)({model:"meet",inputResolution:"96p",pipeline:"canvas2dCpu"}),p=Object(l.a)(g,2),m=p[0],j=p[1],h=Object(o.useState)({smoothSegmentationMask:!0,jointBilateralFilter:{sigmaSpace:1,sigmaColor:.5}}),v=Object(l.a)(h,2),O=v[0],x=v[1],E=Be(t,m);return Object(r.jsxs)("div",{className:n.root,children:[Object(r.jsx)(Se,{source:c,background:d,bodyPix:e,tflite:E||"bodyPix"===m.model?t:void 0,segmentationConfig:m,postProcessingConfig:O}),Object(r.jsx)(oe,{source:c,onChange:u}),Object(r.jsx)(M,{background:d,onChange:b}),Object(r.jsx)(q,{config:m,onChange:j}),Object(r.jsx)(X,{config:O,pipeline:m.pipeline,onChange:x})]})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,409)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};u.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(Le,{})]}),document.getElementById("root")),Ne()}},[[348,1,2]]]);
//# sourceMappingURL=main.346674e0.chunk.js.map