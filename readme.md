# Leverage

## BEM

### `lv.element('name')`

|Level|Command|
|---|---|
|Element|`@include lv.element()`|
|Alternative|`@include lv.e()`|

**Input**
```scss
.block {
    @include lv.element('element') {
      // Styles
    }
}
```

**Output**
```css
.block {}
.block__element {}
```

### `lv.modifier('name')`

|Level|Command|
|---|---|
|Modifier|`@include lv.modifier()`|
|Alternative|`@include lv.m()`|

**Input**
```scss
.block {
  @include lv.modifier('modifier') {
    // Styles
  }

  @include lv.element('element') {
    @include lv.modifier('modifier') {
      // Styles
    }
  }
}
```

**Output**
```css
.block {}
.block--modifier {}
.block__element {}
.block__element--modifier {}
```

## Settings

### Changing Colors
```scss
@use 'leverage' as lv with (
  $colors: (
    'name': #fff
  )
);