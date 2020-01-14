// 现在我们知道了 GPU 如何处理并行线程，"""每个线程负责给完整图像的一部分配置"""
// 颜色。尽管每个线程和其他线程之间不能有数据交换，但我们能从 CPU 给每个线程输入数据。
// """因为显卡的架构，所有线程的输入值必须统一（uniform），而且必须设为只读"""。
// 也就是说，每条线程接收相同的数据，并且是不可改变的数据。

// 这些输入值叫做 uniform （统一值），它们的数据类型通常为：float, vec2, vec3, vec4, mat2, mat3, mat4, sampler2D and samplerCube。
// """uniform 值需要数值类型前后一致。且在 shader 的开头，在设定精度之后，就对其进行定义"""。



// 你可以把 uniforms 想象成连通 GPU 和 CPU 的许多小的桥梁

// ```

// #ifdef GL_ES
// precision mediump float;
// #endif

// // 按业界传统应在 uniform 值的名字前加 u_ ，这样一看即知是 uniform
// uniform vec2 u_resolution; // 画布尺寸（宽，高）
// uniform vec2 u_mouse;      // 鼠标位置（在屏幕上哪个像素）
// uniform float u_time;     // 时间（加载后的秒数）

// ```


#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
}