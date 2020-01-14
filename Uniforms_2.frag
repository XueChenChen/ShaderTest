#ifdef GL_ES
precision mediump float;
#endif

// // 按业界传统应在 uniform 值的名字前加 u_ ，这样一看即知是 uniform
// uniform vec2 u_resolution; // 画布尺寸（宽，高）
// uniform vec2 u_mouse;      // 鼠标位置（在屏幕上哪个像素）
// uniform float u_time;     // 时间（加载后的秒数）

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	gl_FragColor = vec4(st.x,st.y,0.0,1.0);
}



// gl_FragCoord
// 就像 GLSL 有个默认输出值 vec4 gl_FragColor 一样，它也有一个默认输入值（ vec4 gl_FragCoord ）。
// gl_FragCoord存储了活动线程正在处理的像素或屏幕碎片的坐标。
// 有了它我们就知道了屏幕上的哪一个线程正在运转。为什么我们不叫 gl_FragCoord uniform （统一值）呢？
// 因为每个像素的坐标都不同，所以我们把它叫做 varying（变化值）。