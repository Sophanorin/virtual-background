(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{337:function(e,t){},338:function(e,t){},346:function(e,t){},349:function(e,t){},350:function(e,t){},351:function(e,t,n){"use strict";n.r(t);var r=n(401),a=n(7),o=n.n(a),i=n(52),c=n.n(i),u=n(58),s=n(50),l=n(5),f=n(394),d=n(404),g=n(396),b=n(397),m=n(354),p=n(288),h=n.n(p),v=n(289),j=n.n(v),x=n(4),O=n.n(x),_=n(12);function E(e,t,n){var r=Math.min(t,n),a=(t-r)/2,o=(n-r)/2,i=document.createElement("canvas");return i.width=63,i.height=63,i.getContext("2d").drawImage(e,a,o,r,r,0,0,i.width,i.height),new Promise((function(e){return i.toBlob((function(t){return e(t)}))}))}var C=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){var t=new Image;t.src=e,t.onload=Object(_.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,t.naturalWidth,t.naturalHeight);case 2:n=e.sent,o(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]},T=n(395),R=n(26),F=n(390),A=n(22);var k=Object(f.a)((function(e){return Object(d.a)({root:{padding:0,minWidth:e.spacing(7)+2,height:e.spacing(7)+2,width:e.spacing(7)+2,marginRight:e.spacing(1),marginBottom:e.spacing(1),border:"2px solid transparent",alignItems:"stretch",transitionProperty:"transform, border-color",transitionDuration:"".concat(e.transitions.duration.shorter,"ms"),transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{transform:"scale(1.125)"}},active:{borderColor:e.palette.primary.main,transform:"scale(1.125)"}})})),y=function(e){var t=k();return Object(A.jsx)(F.a,{className:Object(R.a)(t.root,e.active&&t.active),disabled:e.disabled,onClick:e.onClick,children:e.children})};var U=Object(f.a)((function(e){return Object(d.a)({scalableContent:{width:"calc(100% + 2px)",height:"calc(100% + 2px)",margin:-1,borderRadius:e.shape.borderRadius},image:{objectFit:"cover"}})})),S=function(e){var t=U();return Object(A.jsxs)(y,{active:!!e.thumbnailUrl&&e.active,disabled:!e.thumbnailUrl,onClick:e.onClick,children:[e.thumbnailUrl?Object(A.jsx)("img",{className:Object(R.a)(t.scalableContent,t.image),src:e.thumbnailUrl,alt:"",onLoad:e.onLoad}):Object(A.jsx)(T.a,{className:t.scalableContent,variant:"rect"}),e.children]})};var w=function(e){var t=C(e.imageUrl),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(A.jsx)(S,{thumbnailUrl:r,active:e.active,onClick:e.onClick,onLoad:a})};var P=Object(f.a)((function(e){return Object(d.a)({root:{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:e.shape.borderRadius,margin:-1,boxSizing:"content-box",display:"flex",justifyContent:"center",alignItems:"center"}})})),M=function(e){var t=P();return Object(A.jsx)(y,{active:e.active,onClick:e.onClick,children:Object(A.jsx)("div",{className:t.root,children:e.children})})},L=["architecture-5082700_1280","porch-691330_1280","saxon-switzerland-539418_1280","shibuyasky-4768679_1280"].map((function(e){return"".concat("/virtual-background","/backgrounds/").concat(e,".jpg")}));var D=Object(f.a)((function(e){return Object(d.a)({root:{flex:1}})})),B=function(e){var t=D();return Object(A.jsx)(g.a,{className:t.root,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Background"}),Object(A.jsx)(M,{active:"none"===e.config.type,onClick:function(){return e.onChange({type:"none"})},children:Object(A.jsx)(h.a,{})}),Object(A.jsx)(M,{active:"blur"===e.config.type,onClick:function(){return e.onChange({type:"blur"})},children:Object(A.jsx)(j.a,{})}),L.map((function(t){return Object(A.jsx)(w,{imageUrl:t,active:t===e.config.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)}))]})})},I=n(398),N=n(399),W=n(406),X=n(407),G=n(402),H=n(405),V=n(403);var Y=Object(f.a)((function(e){return Object(d.a)({lightWrapping:{display:"flex",alignItems:"center"},formControl:{marginTop:e.spacing(2),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:160}})})),z=function(e){var t=Y();return Object(A.jsx)(g.a,{children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Post-processing"}),"webgl2"===e.pipeline?Object(A.jsxs)(o.a.Fragment,{children:[Object(A.jsx)(m.a,{gutterBottom:!0,children:"Joint bilateral filter"}),Object(A.jsx)(m.a,{variant:"body2",children:"Sigma space"}),Object(A.jsx)(H.a,{value:e.config.jointBilateralFilter.sigmaSpace,min:0,max:10,step:.1,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{jointBilateralFilter:Object(s.a)(Object(s.a)({},e.config.jointBilateralFilter),{},{sigmaSpace:n})}))}}),Object(A.jsx)(m.a,{variant:"body2",children:"Sigma color"}),Object(A.jsx)(H.a,{value:e.config.jointBilateralFilter.sigmaColor,min:0,max:1,step:.01,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{jointBilateralFilter:Object(s.a)(Object(s.a)({},e.config.jointBilateralFilter),{},{sigmaColor:n})}))}}),Object(A.jsx)(m.a,{gutterBottom:!0,children:"Background"}),Object(A.jsx)(m.a,{variant:"body2",children:"Coverage"}),Object(A.jsx)(H.a,{value:e.config.coverage,min:0,max:1,step:.01,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{coverage:n}))}}),Object(A.jsx)(m.a,{variant:"body2",gutterBottom:!0,children:"Light wrapping"}),Object(A.jsxs)("div",{className:t.lightWrapping,children:[Object(A.jsxs)(I.a,{className:t.formControl,variant:"outlined",children:[Object(A.jsx)(W.a,{children:"Blend mode"}),Object(A.jsxs)(G.a,{label:"Blend mode",value:e.config.blendMode,onChange:function(t){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{blendMode:t.target.value}))},children:[Object(A.jsx)(X.a,{value:"screen",children:"Screen"}),Object(A.jsx)(X.a,{value:"linearDodge",children:"Linear dodge"})]})]}),Object(A.jsx)(H.a,{value:e.config.lightWrapping,min:0,max:1,step:.01,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{lightWrapping:n}))}})]})]}):Object(A.jsx)(N.a,{label:"Smooth segmentation mask",control:Object(A.jsx)(V.a,{color:"primary",checked:e.config.smoothSegmentationMask,onChange:function(t){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{smoothSegmentationMask:t.target.checked}))}})})]})})};var q=Object(f.a)((function(e){return Object(d.a)({root:Object(u.a)({},e.breakpoints.only("md"),{gridColumnStart:2,gridRowStart:2}),formControls:{display:"flex",flexWrap:"wrap"},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:200,flex:1}})})),K=function(e){var t=q();return Object(A.jsx)(g.a,{className:t.root,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Segmentation"}),Object(A.jsxs)("div",{className:t.formControls,children:[Object(A.jsxs)(I.a,{className:t.formControl,variant:"outlined",children:[Object(A.jsx)(W.a,{children:"Model"}),Object(A.jsxs)(G.a,{label:"Model",value:e.config.model,onChange:function(t){var n=t.target.value,r=e.config.backend,a=e.config.inputResolution;"meet"===n?(r="wasm","360p"===a&&(a="144p")):"bodyPix"===n&&(r="webgl",a="360p");var o=e.config.pipeline;"bodyPix"===n&&"webgl2"===o&&(o="canvas2dCpu"),e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{model:n,backend:r,inputResolution:a,pipeline:o}))},children:[Object(A.jsx)(X.a,{value:"meet",children:"Meet"}),Object(A.jsx)(X.a,{value:"bodyPix",children:"BodyPix"})]})]}),Object(A.jsxs)(I.a,{className:t.formControl,variant:"outlined",children:[Object(A.jsx)(W.a,{children:"Backend"}),Object(A.jsxs)(G.a,{label:"Backend",value:e.config.backend,onChange:function(t){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{backend:t.target.value}))},children:[Object(A.jsx)(X.a,{value:"wasm",disabled:"bodyPix"===e.config.model,children:"WebAssembly"}),Object(A.jsx)(X.a,{value:"wasmSimd",disabled:"bodyPix"===e.config.model||!e.isSIMDSupported,children:"WebAssembly SIMD"}),Object(A.jsx)(X.a,{value:"webgl",disabled:"meet"===e.config.model,children:"WebGL"})]})]}),Object(A.jsxs)(I.a,{className:t.formControl,variant:"outlined",children:[Object(A.jsx)(W.a,{children:"Input resolution"}),Object(A.jsxs)(G.a,{label:"Input resolution",value:e.config.inputResolution,onChange:function(t){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{inputResolution:t.target.value}))},children:[Object(A.jsx)(X.a,{value:"360p",disabled:"meet"===e.config.model,children:"360p"}),Object(A.jsx)(X.a,{value:"144p",disabled:"bodyPix"===e.config.model,children:"144p"}),Object(A.jsx)(X.a,{value:"96p",disabled:"bodyPix"===e.config.model,children:"96p"})]})]}),Object(A.jsxs)(I.a,{className:t.formControl,variant:"outlined",children:[Object(A.jsx)(W.a,{children:"Pipeline"}),Object(A.jsxs)(G.a,{label:"Pipeline",value:e.config.pipeline,onChange:function(t){e.onChange(Object(s.a)(Object(s.a)({},e.config),{},{pipeline:t.target.value}))},children:[Object(A.jsx)(X.a,{value:"webgl2",disabled:"bodyPix"===e.config.model,children:"WebGL 2"}),Object(A.jsx)(X.a,{value:"canvas2dCpu",children:"Canvas 2D + CPU"})]})]})]})]})})},J=n(291),Q=n.n(J),Z=n(290),$=n.n(Z);var ee=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){var t=document.createElement("video");t.src=e,t.onloadedmetadata=function(){t.currentTime=t.duration/2},t.onseeked=Object(_.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,t.videoWidth,t.videoHeight);case 2:n=e.sent,o(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]};var te=Object(f.a)((function(e){return Object(d.a)({icon:{position:"absolute",bottom:0,right:0,color:e.palette.common.white}})})),ne=function(e){var t=te(),n=ee(e.videoUrl),r=Object(l.a)(n,2),a=r[0],o=r[1];return Object(A.jsx)(S,{thumbnailUrl:a,active:e.active,onClick:e.onClick,onLoad:o,children:Object(A.jsx)($.a,{className:t.icon})})},re=["girl-919048_1280","doctor-5871743_640","woman-5883428_1280"].map((function(e){return"".concat("/virtual-background","/images/").concat(e,".jpg")})),ae=["Dance - 32938","Doctor - 26732","Thoughtful - 35590"].map((function(e){return"".concat("/virtual-background","/videos/").concat(e,".mp4")}));var oe=Object(f.a)((function(e){return Object(d.a)({root:{flex:1}})})),ie=function(e){var t=oe();return Object(A.jsx)(g.a,{className:t.root,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Source"}),Object(A.jsx)(M,{active:"camera"===e.config.type,onClick:function(){return e.onChange({type:"camera"})},children:Object(A.jsx)(Q.a,{})}),re.map((function(t){return Object(A.jsx)(w,{imageUrl:t,active:t===e.config.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)})),ae.map((function(t){return Object(A.jsx)(ne,{videoUrl:t,active:t===e.config.url,onClick:function(){return e.onChange({type:"video",url:t})}},t)}))]})})},ce=n(408),ue=n(353),se={"360p":[640,360],"144p":[256,144],"96p":[160,96]};function le(e,t,n,r,a,o,i){var c=r.getContext("2d"),u=Object(l.a)(se[n.inputResolution],2),s=u[0],f=u[1],d=s*f,g=new ImageData(s,f),b=document.createElement("canvas");b.width=s,b.height=f;var m,p=b.getContext("2d"),h=o._getInputMemoryOffset()/4,v=o._getOutputMemoryOffset()/4;function j(){return(j=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==t.type&&x(),i(),"none"===t.type){e.next=9;break}if("bodyPix"!==n.model){e.next=8;break}return e.next=6,E();case 6:e.next=9;break;case 8:T();case 9:i(),R();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){if(p.drawImage(e.htmlElement,0,0,e.width,e.height,0,0,s,f),"meet"===n.model)for(var t=p.getImageData(0,0,s,f),r=0;r<d;r++)o.HEAPF32[h+3*r]=t.data[4*r]/255,o.HEAPF32[h+3*r+1]=t.data[4*r+1]/255,o.HEAPF32[h+3*r+2]=t.data[4*r+2]/255}function E(){return C.apply(this,arguments)}function C(){return(C=Object(_.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.segmentPerson(b);case 2:for(t=e.sent,n=0;n<d;n++)g.data[4*n+3]=t.data[n]?255:0;p.putImageData(g,0,0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){o._runInference();for(var e=0;e<d;e++){var t=o.HEAPF32[v+2*e],n=o.HEAPF32[v+2*e+1],r=Math.max(t,n),a=Math.exp(t-r),i=Math.exp(n-r);g.data[4*e+3]=255*i/(a+i)}p.putImageData(g,0,0)}function R(){var n;c.globalCompositeOperation="copy",c.filter="none",(null===(n=m)||void 0===n?void 0:n.smoothSegmentationMask)&&("blur"===t.type?c.filter="blur(8px)":"image"===t.type&&(c.filter="blur(4px)")),"none"!==t.type&&(c.drawImage(b,0,0,s,f,0,0,e.width,e.height),c.globalCompositeOperation="source-in",c.filter="none"),c.drawImage(e.htmlElement,0,0),"blur"===t.type&&(c.globalCompositeOperation="destination-over",c.filter="blur(8px)",c.drawImage(e.htmlElement,0,0))}return{render:function(){return j.apply(this,arguments)},updatePostProcessingConfig:function(e){m=e},cleanUp:function(){}}}var fe,de,ge,be,me,pe,he,ve,je=n(75),xe=String.raw;function Oe(e,t,n,r,a){var o=function(e,t,n){var r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error("Could not link WebGL program: ".concat(e.getProgramInfoLog(r)));return r}(e,t,n),i=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,r),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);var c=e.getAttribLocation(o,"a_texCoord");return e.enableVertexAttribArray(c),e.bindBuffer(e.ARRAY_BUFFER,a),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0),o}function _e(e,t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error("Could not compile shader: ".concat(e.getShaderInfoLog(r)));return r}function Ee(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.NEAREST,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e.NEAREST,i=e.createTexture();return e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o),e.texStorage2D(e.TEXTURE_2D,1,t,n,r),i}function Ce(){return(Ce=Object(_.a)(O.a.mark((function e(t,n,r,a,o,i,c,u){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.createBuffer(),t.bindBuffer(t.PIXEL_PACK_BUFFER,s),t.bufferData(t.PIXEL_PACK_BUFFER,u.byteLength,t.STREAM_READ),t.readPixels(n,r,a,o,i,c,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),e.next=7,Te(t,t.PIXEL_PACK_BUFFER,s,0,u);case 7:return t.deleteBuffer(s),e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e,t,n,r,a,o,i){return Re.apply(this,arguments)}function Re(){return(Re=Object(_.a)(O.a.mark((function e(t,n,r,a,o,i,c){var u,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),e.next=4,Fe(t,u);case 4:s=e.sent,t.deleteSync(u),s!==t.WAIT_FAILED&&(t.bindBuffer(n,r),t.getBufferSubData(n,a,o,i,c),t.bindBuffer(n,null));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(e,t){return new Promise((function(n){requestAnimationFrame((function r(){var a=e.clientWaitSync(t,0,0);a!==e.WAIT_FAILED?a!==e.TIMEOUT_EXPIRED?n(a):requestAnimationFrame(r):n(a)}))}))}function Ae(e,t,n,r,a,o){var i=xe(pe||(pe=Object(je.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    void main() {\n      outColor = texture(u_inputFrame, v_texCoord);\n    }\n  "]))),c=o._getInputMemoryOffset()/4,u=Object(l.a)(se[a.inputResolution],2),s=u[0],f=u[1],d=s*f,g=_e(e,e.FRAGMENT_SHADER,i),b=Oe(e,t,g,n,r),m=e.getUniformLocation(b,"u_inputFrame"),p=Ee(e,e.RGBA8,s,f),h=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,h),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,p,0);var v=new Uint8Array(4*d);return e.useProgram(b),e.uniform1i(m,0),{render:function(){e.useProgram(b),e.bindFramebuffer(e.FRAMEBUFFER,h),e.viewport(0,0,s,f),e.drawArrays(e.TRIANGLE_STRIP,0,4),function(e,t,n,r,a,o,i,c){Ce.apply(this,arguments)}(e,0,0,s,f,e.RGBA,e.UNSIGNED_BYTE,v);for(var t=0;t<d;t++){var n=c+3*t,r=4*t;o.HEAPF32[n]=v[r]/255,o.HEAPF32[n+1]=v[r+1]/255,o.HEAPF32[n+2]=v[r+2]/255}},cleanUp:function(){e.deleteFramebuffer(h),e.deleteTexture(p),e.deleteProgram(b),e.deleteShader(g)}}}function ke(e,t,n,r,a,o,i){var c=xe(ve||(ve=Object(je.a)(["#version 300 es\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    out vec2 v_texCoord;\n\n    void main() {\n      gl_Position = vec4(a_position, 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "]))),u=e.width,s=e.height,f=Object(l.a)(se[r.inputResolution],2),d=f[0],g=f[1],b=a.getContext("webgl2"),m=_e(b,b.VERTEX_SHADER,c),p=b.createVertexArray();b.bindVertexArray(p);var h=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,h),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),b.STATIC_DRAW);var v=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,v),b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),b.STATIC_DRAW);var j=b.createTexture();b.bindTexture(b.TEXTURE_2D,j),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);var x=Ee(b,b.RGBA8,d,g),E=Ee(b,b.RGBA8,u,s),C=Ae(b,m,h,v,r,o),T=function(e,t,n,r,a,o,i){var c=xe(he||(he=Object(je.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputSegmentation;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    void main() {\n      vec2 segmentation = texture(u_inputSegmentation, v_texCoord).rg;\n      float shift = max(segmentation.r, segmentation.g);\n      float backgroundExp = exp(segmentation.r - shift);\n      float personExp = exp(segmentation.g - shift);\n      outColor = vec4(vec3(0.0), personExp / (backgroundExp + personExp));\n    }\n  "]))),u=o._getOutputMemoryOffset()/4,s=Object(l.a)(se[a.inputResolution],2),f=s[0],d=s[1],g=_e(e,e.FRAGMENT_SHADER,c),b=Oe(e,t,g,n,r),m=e.getUniformLocation(b,"u_inputSegmentation"),p=Ee(e,e.RG32F,f,d),h=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,h),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.useProgram(b),e.uniform1i(m,1),{render:function(){e.useProgram(b),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,p),e.texSubImage2D(e.TEXTURE_2D,0,0,0,f,d,e.RG,e.FLOAT,o.HEAPF32,u),e.bindFramebuffer(e.FRAMEBUFFER,h),e.viewport(0,0,f,d),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteFramebuffer(h),e.deleteTexture(p),e.deleteProgram(b),e.deleteShader(g)}}}(b,m,h,v,r,o,x),R=function(e,t,n,r,a,o,i,c){var u=xe(me||(me=Object(je.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_segmentationMask;\n    uniform vec2 u_texelSize;\n    uniform float u_step;\n    uniform float u_radius;\n    uniform float u_offset;\n    uniform float u_sigmaTexel;\n    uniform float u_sigmaColor;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    float gaussian(float x, float sigma) {\n      float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);\n      return exp((x * x) * coeff);\n    }\n\n    void main() {\n      vec2 centerCoord = v_texCoord;\n      vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;\n      float newVal = 0.0;\n\n      float spaceWeight = 0.0;\n      float colorWeight = 0.0;\n      float totalWeight = 0.0;\n\n      // Subsample kernel space.\n      for (float i = -u_radius + u_offset; i <= u_radius; i += u_step) {\n        for (float j = -u_radius + u_offset; j <= u_radius; j += u_step) {\n          vec2 shift = vec2(j, i) * u_texelSize;\n          vec2 coord = vec2(centerCoord + shift);\n          vec3 frameColor = texture(u_inputFrame, coord).rgb;\n          float outVal = texture(u_segmentationMask, coord).a;\n\n          spaceWeight = gaussian(distance(centerCoord, coord), u_sigmaTexel);\n          colorWeight = gaussian(distance(centerColor, frameColor), u_sigmaColor);\n          totalWeight += spaceWeight * colorWeight;\n\n          newVal += spaceWeight * colorWeight * outVal;\n        }\n      }\n      newVal /= totalWeight;\n\n      outColor = vec4(vec3(0.0), newVal);\n    }\n  "]))),s=Object(l.a)(se[o.inputResolution],2),f=s[0],d=s[1],g=c.width,b=c.height,m=1/g,p=1/b,h=_e(e,e.FRAGMENT_SHADER,u),v=Oe(e,t,h,n,r),j=e.getUniformLocation(v,"u_inputFrame"),x=e.getUniformLocation(v,"u_segmentationMask"),O=e.getUniformLocation(v,"u_texelSize"),_=e.getUniformLocation(v,"u_step"),E=e.getUniformLocation(v,"u_radius"),C=e.getUniformLocation(v,"u_offset"),T=e.getUniformLocation(v,"u_sigmaTexel"),R=e.getUniformLocation(v,"u_sigmaColor"),F=e.createFramebuffer();function A(t){t*=Math.max(g/f,b/d);var n=Math.max(1,.66*Math.sqrt(t)),r=t,a=n>1?.5*n:0,o=Math.max(m,p)*t;e.useProgram(v),e.uniform1f(_,n),e.uniform1f(E,r),e.uniform1f(C,a),e.uniform1f(T,o)}function k(t){e.useProgram(v),e.uniform1f(R,t)}return e.bindFramebuffer(e.FRAMEBUFFER,F),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.useProgram(v),e.uniform1i(j,0),e.uniform1i(x,1),e.uniform2f(O,m,p),A(0),k(0),{render:function(){e.useProgram(v),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a),e.bindFramebuffer(e.FRAMEBUFFER,F),e.viewport(0,0,g,b),e.drawArrays(e.TRIANGLE_STRIP,0,4)},updateSigmaSpace:A,updateSigmaColor:k,cleanUp:function(){e.deleteFramebuffer(F),e.deleteProgram(v),e.deleteShader(h)}}}(b,m,h,v,x,r,E,a),F="blur"===n.type?function(e,t,n,r,a){var o=xe(fe||(fe=Object(je.a)(["#version 300 es\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    uniform float u_flipY;\n\n    out vec2 v_texCoord;\n\n    void main() {\n      // Flipping Y is required for the last pass when rendering to canvas\n      gl_Position = vec4(a_position * vec2(1.0, u_flipY), 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "]))),i=xe(de||(de=Object(je.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_personMask;\n    uniform vec2 u_texelSize;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    const float offset[5] = float[](0.0, 1.0, 2.0, 3.0, 4.0);\n    const float weight[5] = float[](0.2270270270, 0.1945945946, 0.1216216216,\n      0.0540540541, 0.0162162162);\n\n    void main() {\n      vec4 centerColor = texture(u_inputFrame, v_texCoord);\n      float personMask = texture(u_personMask, v_texCoord).a;\n\n      vec4 frameColor = centerColor * weight[0] * (1.0 - personMask);\n\n      for (int i = 1; i < 5; i++) {\n        vec2 offset = vec2(offset[i]) * u_texelSize;\n\n        vec2 texCoord = v_texCoord + offset;\n        frameColor += texture(u_inputFrame, texCoord) * weight[i] *\n          (1.0 - texture(u_personMask, texCoord).a);\n\n        texCoord = v_texCoord - offset;\n        frameColor += texture(u_inputFrame, texCoord) * weight[i] *\n          (1.0 - texture(u_personMask, texCoord).a);\n      }\n      outColor = vec4(frameColor.rgb + (1.0 - frameColor.a) * centerColor.rgb, 1.0);\n    }\n  "]))),c=a.width,u=a.height,s=1/c,l=1/u,f=_e(e,e.VERTEX_SHADER,o),d=_e(e,e.FRAGMENT_SHADER,i),g=Oe(e,f,d,t,n),b=e.getUniformLocation(g,"u_inputFrame"),m=e.getUniformLocation(g,"u_personMask"),p=e.getUniformLocation(g,"u_texelSize"),h=e.getUniformLocation(g,"u_flipY"),v=Ee(e,e.RGBA8,c,u),j=Ee(e,e.RGBA8,c,u),x=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,x),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,v,0);var O=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,O),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j,0),e.useProgram(g),e.uniform1i(b,0),e.uniform1i(m,1),{render:function(){e.useProgram(g),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,r),e.uniform1f(h,1),e.activeTexture(e.TEXTURE0),e.uniform2f(p,0,l),e.bindFramebuffer(e.FRAMEBUFFER,x),e.viewport(0,0,c,u),e.drawArrays(e.TRIANGLE_STRIP,0,4);for(var t=0;t<9;t++)e.bindTexture(e.TEXTURE_2D,v),e.uniform2f(p,s,0),e.bindFramebuffer(e.FRAMEBUFFER,O),e.viewport(0,0,c,u),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.bindTexture(e.TEXTURE_2D,j),e.uniform2f(p,0,l),e.bindFramebuffer(e.FRAMEBUFFER,x),e.viewport(0,0,c,u),e.drawArrays(e.TRIANGLE_STRIP,0,4);e.bindTexture(e.TEXTURE_2D,v),e.uniform2f(p,s,0),e.uniform1f(h,-1),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,c,u),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteFramebuffer(O),e.deleteFramebuffer(x),e.deleteTexture(j),e.deleteTexture(v),e.deleteProgram(g),e.deleteShader(d),e.deleteShader(f)}}}(b,h,v,E,a):function(e,t,n,r,a,o){var i=xe(ge||(ge=Object(je.a)(["#version 300 es\n\n    uniform vec2 u_backgroundScale;\n    uniform vec2 u_backgroundOffset;\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    out vec2 v_texCoord;\n    out vec2 v_backgroundCoord;\n\n    void main() {\n      // Flipping Y is required when rendering to canvas\n      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);\n      v_texCoord = a_texCoord;\n      v_backgroundCoord = a_texCoord * u_backgroundScale + u_backgroundOffset;\n    }\n  "]))),c=xe(be||(be=Object(je.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_personMask;\n    uniform sampler2D u_background;\n    uniform vec2 u_coverage;\n    uniform float u_lightWrapping;\n    uniform float u_blendMode;\n\n    in vec2 v_texCoord;\n    in vec2 v_backgroundCoord;\n\n    out vec4 outColor;\n\n    vec3 screen(vec3 a, vec3 b) {\n      return 1.0 - (1.0 - a) * (1.0 - b);\n    }\n\n    vec3 linearDodge(vec3 a, vec3 b) {\n      return a + b;\n    }\n\n    void main() {\n      vec3 frameColor = texture(u_inputFrame, v_texCoord).rgb;\n      vec3 backgroundColor = texture(u_background, v_backgroundCoord).rgb;\n      float personMask = texture(u_personMask, v_texCoord).a;\n      float lightWrapMask = 1.0 - max(0.0, personMask - u_coverage.y) / (1.0 - u_coverage.y);\n      vec3 lightWrap = u_lightWrapping * lightWrapMask * backgroundColor;\n      frameColor = u_blendMode * linearDodge(frameColor, lightWrap) +\n        (1.0 - u_blendMode) * screen(frameColor, lightWrap);\n      personMask = smoothstep(u_coverage.x, u_coverage.y, personMask);\n      outColor = vec4(frameColor * personMask + backgroundColor * (1.0 - personMask), 1.0);\n    }\n  "]))),u=o.width,s=o.height,l=u/s,f=_e(e,e.VERTEX_SHADER,i),d=_e(e,e.FRAGMENT_SHADER,c),g=Oe(e,f,d,t,n),b=e.getUniformLocation(g,"u_backgroundScale"),m=e.getUniformLocation(g,"u_backgroundOffset"),p=e.getUniformLocation(g,"u_inputFrame"),h=e.getUniformLocation(g,"u_personMask"),v=e.getUniformLocation(g,"u_background"),j=e.getUniformLocation(g,"u_coverage"),x=e.getUniformLocation(g,"u_lightWrapping"),O=e.getUniformLocation(g,"u_blendMode");e.useProgram(g),e.uniform2f(b,1,1),e.uniform2f(m,0,0),e.uniform1i(p,0),e.uniform1i(h,1),e.uniform2f(j,0,1),e.uniform1f(x,0),e.uniform1f(O,0);var _=null;function E(t){_=Ee(e,e.RGBA8,t.naturalWidth,t.naturalHeight,e.LINEAR,e.LINEAR),e.texSubImage2D(e.TEXTURE_2D,0,0,0,t.naturalWidth,t.naturalHeight,e.RGBA,e.UNSIGNED_BYTE,t);var n=0,r=0,a=t.naturalWidth,o=t.naturalHeight;a/o<l?(o=a/l,r=(t.naturalHeight-o)/2):(a=o*l,n=(t.naturalWidth-a)/2);var i=a/t.naturalWidth,c=o/t.naturalHeight;n/=t.naturalWidth,r/=t.naturalHeight,e.uniform2f(b,i,c),e.uniform2f(m,n,r)}return(null===a||void 0===a?void 0:a.complete)?E(a):a&&(a.onload=function(){E(a)}),{render:function(){e.useProgram(g),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,r),null!==_&&(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,_),e.uniform1i(v,2)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,u,s),e.drawArrays(e.TRIANGLE_STRIP,0,4)},updateCoverage:function(t){e.useProgram(g),e.uniform2f(j,t[0],t[1])},updateLightWrapping:function(t){e.useProgram(g),e.uniform1f(x,t)},updateBlendMode:function(t){e.useProgram(g),e.uniform1f(O,"screen"===t?0:1)},cleanUp:function(){e.deleteTexture(_),e.deleteProgram(g),e.deleteShader(d),e.deleteShader(f)}}}(b,h,v,E,t,a);function A(){return(A=Object(_.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),b.activeTexture(b.TEXTURE0),b.bindTexture(b.TEXTURE_2D,j),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,e.htmlElement),b.bindVertexArray(p),C.render(),i(),o._runInference(),i(),T.render(),R.render(),F.render();case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{render:function(){return A.apply(this,arguments)},updatePostProcessingConfig:function(e){if(R.updateSigmaSpace(e.jointBilateralFilter.sigmaSpace),R.updateSigmaColor(e.jointBilateralFilter.sigmaColor),"none"===n.type){var t=F;t.updateCoverage([0,.9999]),t.updateLightWrapping(0)}else if("image"===n.type){var r=F;r.updateCoverage(e.coverage),r.updateLightWrapping(e.lightWrapping),r.updateBlendMode(e.blendMode)}},cleanUp:function(){F.cleanUp(),R.cleanUp(),T.cleanUp(),C.cleanUp(),b.deleteTexture(E),b.deleteTexture(x),b.deleteTexture(j),b.deleteBuffer(v),b.deleteBuffer(h),b.deleteVertexArray(p),b.deleteShader(m)}}}var ye=function(e,t,n,r,o){var i=Object(a.useState)(null),c=Object(l.a)(i,2),u=c[0],s=c[1],f=Object(a.useRef)(null),d=Object(a.useRef)(null),g=Object(a.useState)(0),b=Object(l.a)(g,2),m=b[0],p=b[1],h=Object(a.useState)([]),v=Object(l.a)(h,2),j=v[0],x=v[1];return Object(a.useEffect)((function(){var a,i=!0,c=0,u=0,l=0,g=0,b=[],m="webgl2"===n.pipeline?ke(e,f.current,t,n,d.current,o,E):le(e,t,n,d.current,r,o,E);function h(){return v.apply(this,arguments)}function v(){return(v=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return j(),e.next=5,m.render();case 5:C(),a=requestAnimationFrame(h);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){u=Date.now()}function E(){var e=Date.now();b[l]=e-u,u=e,l++}function C(){var e=Date.now();b[l]=e-u,g++,e>=c+1e3&&(p(1e3*g/(e-c)),x(b),c=e,g=0),l=0}return h(),console.log("Animation started:",e,t,n),s(m),function(){i=!1,cancelAnimationFrame(a),m.cleanUp(),console.log("Animation stopped:",e,t,n),s(null)}}),[e,t,n,r,o]),{pipeline:u,backgroundImageRef:f,canvasRef:d,fps:m,durations:j}};var Ue=Object(f.a)((function(e){return Object(d.a)({root:{flex:1,position:"relative"},render:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},stats:{position:"absolute",top:0,right:0,left:0,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.48)",color:e.palette.common.white}})})),Se=function(e){var t=Ue(),n=ye(e.sourcePlayback,e.backgroundConfig,e.segmentationConfig,e.bodyPix,e.tflite),r=n.pipeline,o=n.backgroundImageRef,i=n.canvasRef,c=n.fps,u=Object(l.a)(n.durations,3),s=u[0],f=u[1],d=u[2];Object(a.useEffect)((function(){r&&r.updatePostProcessingConfig(e.postProcessingConfig)}),[r,e.postProcessingConfig]);var g=["resizing ".concat(s,"ms"),"inference ".concat(f,"ms"),"post-processing ".concat(d,"ms")],b="".concat(Math.round(c)," fps (").concat(g.join(", "),")");return Object(A.jsxs)("div",{className:t.root,children:["image"===e.backgroundConfig.type&&Object(A.jsx)("img",{ref:o,className:t.render,src:e.backgroundConfig.url,alt:"",hidden:"webgl2"===e.segmentationConfig.pipeline}),Object(A.jsx)("canvas",{ref:i,className:t.render,width:e.sourcePlayback.width,height:e.sourcePlayback.height},e.segmentationConfig.pipeline),Object(A.jsx)(m.a,{className:t.stats,variant:"caption",children:b})]})},we=n(400),Pe=n(292),Me=n.n(Pe);var Le=Object(f.a)((function(e){var t;return Object(d.a)({root:(t={position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},Object(u.a)(t,e.breakpoints.down("xs"),{width:0,overflow:"hidden"}),Object(u.a)(t,e.breakpoints.up("sm"),{flex:1,borderRightWidth:1,borderRightStyle:"solid",borderRightColor:e.palette.divider}),t),sourcePlayback:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}})})),De=function(e){var t=Le(),n=Object(a.useState)(),r=Object(l.a)(n,2),o=r[0],i=r[1],c=Object(a.useState)(!1),u=Object(l.a)(c,2),s=u[0],f=u[1],d=Object(a.useState)(!1),g=Object(l.a)(d,2),b=g[0],m=g[1],p=Object(a.useRef)(null);return Object(a.useEffect)((function(){i(void 0),f(!0),m(!1),setTimeout((function(){return i(e.sourceConfig.url)}))}),[e.sourceConfig]),Object(a.useEffect)((function(){function t(){return(t=Object(_.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={video:!0},e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:if(n=e.sent,!p.current){e.next=8;break}return p.current.srcObject=n,e.abrupt("return");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error opening video camera.",e.t0);case 13:f(!1),m(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}"camera"===e.sourceConfig.type?function(){t.apply(this,arguments)}():p.current&&(p.current.srcObject=null)}),[e.sourceConfig]),Object(A.jsxs)("div",{className:t.root,children:[s&&Object(A.jsx)(we.a,{}),"image"===e.sourceConfig.type?Object(A.jsx)("img",{className:t.sourcePlayback,src:o,hidden:s,alt:"",onLoad:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.naturalWidth,height:n.naturalHeight}),f(!1)}}):b?Object(A.jsx)(Me.a,{fontSize:"large"}):Object(A.jsx)("video",{ref:p,className:t.sourcePlayback,src:o,hidden:s,autoPlay:!0,playsInline:!0,controls:!1,muted:!0,loop:!0,onLoadedData:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.videoWidth,height:n.videoHeight}),f(!1)}})]})};var Be=Object(f.a)((function(e){var t,n=["".concat(e.spacing(52),"px"),"100vh - ".concat(e.spacing(2),"px")];return Object(d.a)({root:(t={minHeight:"calc(min(".concat(n.join(", "),"))"),display:"flex",overflow:"hidden"},Object(u.a)(t,e.breakpoints.up("md"),{gridColumnStart:1,gridColumnEnd:3}),Object(u.a)(t,e.breakpoints.up("lg"),{gridRowStart:1,gridRowEnd:3}),t),noOutput:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:e.spacing(20),height:e.spacing(20)}})})),Ie=function(e){var t=Be(),n=Object(a.useState)(),r=Object(l.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){i(void 0)}),[e.sourceConfig]),Object(A.jsxs)(ue.a,{className:t.root,children:[Object(A.jsx)(De,{sourceConfig:e.sourceConfig,onLoad:i}),o&&e.bodyPix&&e.tflite?Object(A.jsx)(Se,{sourcePlayback:o,backgroundConfig:e.backgroundConfig,segmentationConfig:e.segmentationConfig,postProcessingConfig:e.postProcessingConfig,bodyPix:e.bodyPix,tflite:e.tflite}):Object(A.jsx)("div",{className:t.noOutput,children:Object(A.jsx)(ce.a,{className:t.avatar})})]})},Ne=n(293),We=n(313);var Xe=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,We.a();case 3:return e.t0=r,e.next=6,Ne.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Ge=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(),c=Object(l.a)(i,2),u=c[0],s=c[1],f=Object(a.useState)(),d=Object(l.a)(f,2),g=d[0],b=d[1],m=Object(a.useState)(!1),p=Object(l.a)(m,2),h=p[0],v=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(_.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return createTFLiteModule().then(o),e.prev=1,e.next=4,createTFLiteSIMDModule();case 4:t=e.sent,s(t),v(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("Failed to create TFLite SIMD WebAssembly module.",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function t(){return(t=Object(_.a)(O.a.mark((function t(){var n,a,o,i,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&(!h||u)&&(h||"wasmSimd"!==e.backend)&&"meet"===e.model){t.next=2;break}return t.abrupt("return");case 2:if(b(void 0),n="wasmSimd"===e.backend?u:r){t.next=6;break}throw new Error("TFLite backend unavailable: ".concat(e.backend));case 6:return a="144p"===e.inputResolution?"segm_full_v679":"segm_lite_v681",console.log("Loading meet model:",a),t.next=10,fetch("".concat("/virtual-background","/models/").concat(a,".tflite"));case 10:return o=t.sent,t.next=13,o.arrayBuffer();case 13:i=t.sent,console.log("Model buffer size:",i.byteLength),c=n._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",c),console.log("Loading model buffer..."),n.HEAPU8.set(new Uint8Array(i),c),console.log("_loadModel result:",n._loadModel(i.byteLength)),console.log("Input memory offset:",n._getInputMemoryOffset()),console.log("Input height:",n._getInputHeight()),console.log("Input width:",n._getInputWidth()),console.log("Input channels:",n._getInputChannelCount()),console.log("Output memory offset:",n._getOutputMemoryOffset()),console.log("Output height:",n._getOutputHeight()),console.log("Output width:",n._getOutputWidth()),console.log("Output channels:",n._getOutputChannelCount()),b(n);case 29:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r,u,h,e.model,e.backend,e.inputResolution]),{tflite:g,isSIMDSupported:h}};var He=Object(f.a)((function(e){var t;return Object(d.a)({root:(t={display:"grid"},Object(u.a)(t,e.breakpoints.up("xs"),{margin:e.spacing(1),gap:e.spacing(1),gridTemplateColumns:"1fr"}),Object(u.a)(t,e.breakpoints.up("md"),{margin:e.spacing(2),gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)"}),Object(u.a)(t,e.breakpoints.up("lg"),{gridTemplateColumns:"repeat(3, 1fr)"}),t),resourceSelectionCards:{display:"flex",flexDirection:"column"}})})),Ve=function(){var e=He(),t=Object(a.useState)({type:"image",url:re[0]}),n=Object(l.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)({type:"image",url:L[0]}),c=Object(l.a)(i,2),u=c[0],f=c[1],d=Object(a.useState)({model:"meet",backend:"wasm",inputResolution:"96p",pipeline:"webgl2"}),g=Object(l.a)(d,2),b=g[0],m=g[1],p=Object(a.useState)({smoothSegmentationMask:!0,jointBilateralFilter:{sigmaSpace:1,sigmaColor:.1},coverage:[.5,.75],lightWrapping:.3,blendMode:"screen"}),h=Object(l.a)(p,2),v=h[0],j=h[1],x=Xe(),O=Ge(b),_=O.tflite,E=O.isSIMDSupported;return Object(a.useEffect)((function(){m((function(e){return"wasm"===e.backend&&E?Object(s.a)(Object(s.a)({},e),{},{backend:"wasmSimd"}):e}))}),[E]),Object(A.jsxs)("div",{className:e.root,children:[Object(A.jsx)(Ie,{sourceConfig:r,backgroundConfig:u,segmentationConfig:b,postProcessingConfig:v,bodyPix:x,tflite:_}),Object(A.jsx)(ie,{config:r,onChange:o}),Object(A.jsx)(B,{config:u,onChange:f}),Object(A.jsx)(K,{config:b,isSIMDSupported:E,onChange:m}),Object(A.jsx)(z,{config:v,pipeline:b.pipeline,onChange:j})]})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,409)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};c.a.render(Object(A.jsxs)(o.a.StrictMode,{children:[Object(A.jsx)(r.a,{}),Object(A.jsx)(Ve,{})]}),document.getElementById("root")),Ye()}},[[351,1,2]]]);
//# sourceMappingURL=main.175f24a2.chunk.js.map