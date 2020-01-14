#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    // Use polar coordinates instead of cartesian
    vec2 toCenter = vec2(0.5)-st;
    float angle = atan(toCenter.y,toCenter.x);
    float radius = length(toCenter)*2.0;

    // Map the angle (-PI to PI) to the Hue (from 0 to 1)
    // and the Saturation to the radius
    color = hsb2rgb(vec3((angle/TWO_PI)+0.5,radius,1.0));

    gl_FragColor = vec4(color,1.0);
}

// 极坐标下的HSB
// HSB原本是在极坐标下产生的（以半径和角度定义）而并非在笛卡尔坐标系（基于xy定义）下。
// 将HSB映射到极坐标我们需要取得角度和到像素屏中点的距离。由此我们运用 length() 函数和 atan(y,x) 函数（在GLSL中通常用atan（y,x））。

// 当用到矢量和三角学函数时，vec2, vec3 和 vec4被当做向量对待，即使有时候他们代表颜色。
// 我们开始把颜色和向量同等的对待，事实上你会慢慢发现这种理念的灵活性有着相当强大的用途。

// 注意：如果你想了解，除length（）以外的诸多几何函数，例如：
// distance(), dot(), cross, normalize(), faceforward(), reflect() 和 refract()。
// GLSL也有与向量相关的函数：lessThan(), lessThanEqual(), greaterThan(), greaterThanEqual(), equal() and notEqual()。

// 一旦我们得到角度和长度，我们需要单位化这些值：0.0到1.0。在27行，atan(y,x) 
// 会返回一个介于-PI到PI的弧度值（-3.14 to 3.14），所以我们要将这个返回值除以 TWO_PI（在code顶部定义了）来得到一个-0.5到0.5的值。
// 这样一来，用简单的加法就可以把这个返回值最终映射到0.0到1.0。半径会返回一个最大值0.5（因为我们计算的是到视口中心的距离，
// 而视口中心的范围已经被映射到0.0到1.0），所以我们需要把这个值乘以二来得到一个0到1.0的映射。

// 正如你所见，这里我们的游戏都是关于变换和映射到一个0到1这样我们乐于处理的值。





// 你会注意到变量类型之前有个限定符 in，
// 在这个 qualifier (限定符)例子中它特指这个变量是只读的。
// 在之后的例子中我们会看到可以定义一个 out 或者 inout变量。
// 最后这个 inout，再概念上类似于参照输入一个变量，这意味着我们有可能修改一个传入的变量。

// int newFunction(in vec4 aVec4,   // read-only
//                 out vec3 aVec3,    // write-only
//                 inout int aInt);   // read-write




