#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    // Smooth interpolation between 0.1 and 0.9
    float y = smoothstep(0.1,0.9,st.x);

    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}


// Step 和 Smoothstep
// GLSL 还有一些独特的原生插值函数可以被硬件加速。

// smoothstep()。当给定一个范围的上下限和一个数值，这个函数会在已有的范围内给出插值。
// 前两个参数规定转换的开始和结束点，第三个是给出一个值用来插值。


// 我们用到 smoothstep 在 plot() 函数中画了一条绿色的线。
// 这个函数会对给出的 x 轴上的每个值，在特定的 y 值处制造一个凹凸形变。
// 如何做到呢？通过把两个 smoothstep() 连接到一起。来看看下面这个函数，用它替换上面的第 20 行，
// 把它想成是一个垂直切割。背景看起来很像一条线，不是吗？

// float y = smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x);


