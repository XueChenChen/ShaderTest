#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

    float y = st.x;

    vec3 color = vec3(y);

    // Plot a line
    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

	gl_FragColor = vec4(color,1.0);
}


// 在它之中我们对规范化的 x 坐标（st.x）进行可视化。有两种途径：
// 一种是用亮度（度量从黑色到白色的渐变过程），
// 另一种是在顶层绘制一条绿色的线（在这种情况下 x 被直接赋值给 y）。
// 不用过分在意绘制函数，我们马上会更加详细地解释它。