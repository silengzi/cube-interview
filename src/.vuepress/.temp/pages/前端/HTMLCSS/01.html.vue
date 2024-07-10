<template><div><!-- more -->
<h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局"><span>Flex布局</span></a></h2>
<h3 id="flex容器属性" tabindex="-1"><a class="header-anchor" href="#flex容器属性"><span>flex容器属性：</span></a></h3>
<p><strong>flex-direction（子元素排列顺序）</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>flex-direction:属性规定灵活项目的排列方向（主轴方向）:

row:默认值,灵活的项目将水平显示。
row-reverse:与row相同，但是以相反的顺序。
column:灵活的项目将垂直显示。
column-reverse:与column相同，但是以相反的顺序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex-wrap（换行）</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>用于设置伸缩项目在主轴上的换行方式:

nowrap:默认值。规定灵活的项目不拆行或不拆列。
wrap:规定灵活的项目在必要的时候拆行或拆列。
wrap-reverse:规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex-flow</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap;-简化代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>justify-content（主轴对齐方式）</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>justify-content：用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式:

flex-start:默认值。项目位于容器的开头。	
flex-end:项目位于容器的结尾。	
center:项目位于容器的中心。	
space-between:项目位于各行之间留有空白的容器内。
space-around:项目位于各行之前、之间、之后都留有空白的容器内。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>align-items（侧轴对齐方式）</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>align-items:定义flex子项目在flex容器的侧轴（纵轴）方向上的对齐方式:

stretch:默认值。元素被拉伸以适应容器。
如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
center:元素位于容器的中心。
flex-start:元素位于容器的开头。
flex-end:元素位于容器的结尾。
baseline:元素位于容器的基线上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>align-content（横向排列换行后多行文本y轴对齐方式）</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>align-content：用于设置多行子元素在容器侧轴上的对齐方式(多行时才有效)；

stretch:默认值。元素被拉伸以适应容器。各行将会伸展以占用剩余的空间。
如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸。
center:元素位于容器的中心。
flex-start:元素位于容器的开头。
flex-end:元素位于容器的结尾。
space-between:元素位于各行之间留有空白的容器内。
space-around:元素位于各行之前、之间、之后都留有空白的容器内。
说明：
    align-content在侧轴上执行样式的时候，会把默认的间距给合并。对于单行子元素，该属性不起作用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex子元素属性" tabindex="-1"><a class="header-anchor" href="#flex子元素属性"><span>flex<span style="color: red;">子元素</span>属性：</span></a></h3>
<p><strong>align-self属性（单个元素侧轴对齐方式）</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>align-self：属性定义flex子项单独在侧轴（纵轴）方向上的对齐方式:

注意：align-self 属性可重写灵活容器的 align-items 属性。
auto:默认值。元素继承了它的父容器的align-items属性。如果没有父容器则为 "stretch"。	
stretch:元素被拉伸以适应容器。
center:元素位于容器的中心。
flex-start:元素位于容器的开头。
flex-end:元素位于容器的结尾。
baseline:元素位于容器的基线上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex-grow扩展比率</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>flex-grow：用于设置或检索弹性盒子项目的扩展比率；      

number:规定项目将相对于其他灵活的项目进行扩展的量。默认值是0。
即当容器空间大于内部元素空间之和时，剩余部分将根据各元素指定的flex-grow按比例分配，使各子元素增大；默认值为0，表示剩余空间不分配。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex-shrink收缩比率</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>flex-shrink：设置弹性盒的伸缩项目的收缩比率:

number:规定项目将相对于其他灵活的项目进行收缩的量。默认值是1收缩，0为不收缩。
Flex子元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值；默认值为1，表示溢出时等比例缩小；

算法-公式：
超出空间的像素数：1000-(900+200)=-100px; 
加权总和：=(第一个子元素的宽度)*(shrink)+（第二个子元素的宽度）*   (shrink)+....; 
    A收缩的像素数：(Awidth*shrink)/加权综合)*超出空间 =收缩的像素数 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex-basis伸缩基准值</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>flex-basis:设置弹性盒伸缩基准值（指定flex-item在主轴上的初始大小）:

number:规定灵活项目的初始长度。
auto：默认值。长度等于灵活项目的长度。如果该项目未指定长度，则长度将根据内容决定。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>order出现顺序</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>order：属性设置或检索弹性盒模型对象的子元素出现的順序。
number：值越小排列越靠前，值越大顺序越靠后 + -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex属性简写</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>（1）flex 属性用于设置弹性盒模型对象的子元素如何分配父元素的空间。
（2）flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。

auto = 0 1 auto
none = 0 0 auto
  1  = 1 1 auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid布局" tabindex="-1"><a class="header-anchor" href="#grid布局"><span>Grid布局</span></a></h2>
<p><strong>块级容器</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>display: grid;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>行内容器（宽度随内容自适应）时</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>display: inline-grid;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>划分列</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>grid-template-columns: 100px 1fr 1fr;                // fr 是fraction 的缩写，意为"片段"，可以与绝对长度的单位结合使用
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);               // repeat()接受两个参数，第一个参数是重复的次数，第二个参数是要重复的值。
grid-template-columns: 1fr 1fr minmax(100px, 1fr);   // minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
grid-template-columns: repeat(auto-fill, 100px);     // 空白匿名网格
grid-template-columns: repeat(auto-fit, 100px);      // 空白匿名网格折叠合并
grid-template-columns: fit-content(100px) fit-content(100px) 40px auto;  // 让尺寸适应于内容，但不超过设定的尺寸,只支持数值和百分比值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>划分行</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>grid-template-rows  //  使用方法与列相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>设置行/列的间距</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>row-gap: 20px;       // 行间距
column-gap: 30px;    // 列间距
gap: 20px;           // 行列间距
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置单元格内的对齐方式</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>justify-items 指定单元格内容的水平对齐方式，属性值有：
stretch：【默认值】拉伸，占满单元格的整个宽度。
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。

align-items 指定单元格内容的垂直对齐方式，属性值有：
normal：【默认值】会根据使用场景的不同表现为stretch或者start。
stretch：拉伸，占满单元格的整个宽度。
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
baseline：基线对齐（align-items属性特有属性值）

place-items 是align-items属性和justify-items属性的合并简写形式：
place-items: start end;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>单个项目的对齐方式</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>justify-self 跟justify-items属性的用法完全一致，但只作用于单个项目。

align-self 跟align-items属性的用法完全一致，也是只作用于单个项目。

place-self 是align-self属性和justify-self属性的合并简写形式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


