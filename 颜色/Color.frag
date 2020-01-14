#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

void main() {
    vec3 color = vec3(0.0);

    float pct = abs(sin(u_time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color,1.0);
}


// 混合颜色
// 现在你了解到如何定义颜色，是时候将先前所学的整合一下了！在GLSL中，有个十分有用的函数：mix()，这个函数让你以百分比混合两个值。
// 猜下百分比的取值范围？没错，0到1！完美！学了这么久的基本功，是时候来用一用了！

// https://easings.net/