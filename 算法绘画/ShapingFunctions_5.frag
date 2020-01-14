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

    float y = sin(st.x);

    vec3 color = vec3(y);

    float pct = plot(st, y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}
// y = mod(x,0.5); // 返回 x 对 0.5 取模的值
// y = fract(x); // 仅仅返回数的小数部分
// y = ceil(x);  // 向正无穷取整
// y = floor(x); // 向负无穷取整
// y = sign(x);  // 提取 x 的正负号
// y = abs(x);   // 返回 x 的绝对值
// y = clamp(x,0.0,1.0); // 把 x 的值限制在 0.0 到 1.0
// y = min(0.0,x);   // 返回 x 和 0.0 中的较小值
// y = max(0.0,x);   // 返回 x 和 0.0 中的较大值 

