# Applying a Continuous Gradient to Multiple Text Elements in Tailwind CSS

## Overview
By default, Tailwind applies a gradient **individually** to each text element. To create a **single, continuous** gradient across multiple stacked elements, apply the gradient to a **parent container** instead.

## Solution

Use `bg-gradient-to-b` on the parent container and `bg-clip-text text-transparent` on the text.
then use `no_gradient` class and data-text=`Third Heading` to remove gradient from one element with this css:
```css
.no_gradient {
  position: relative;
}

.no_gradient::before {
  content: attr(data-text); 
  position: absolute;
  -webkit-text-fill-color: var(--primary-text);
}
```

### Example:
```html
<div className="bg-gradient-to-b from-[#e9dfce] to-[#caa35f] text-transparent bg-clip-text inline-block">
  <h2 className="text-4xl font-bold">First Heading</h2>
  <h2 className="text-4xl font-bold">Second Heading</h2>
  <h2 className="no_gradient" data-text="Third Heading">Third Heading</h2>
  <h2 className="text-4xl font-bold">Fourth Heading</h2>
</div>



