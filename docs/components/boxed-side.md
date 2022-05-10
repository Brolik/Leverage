# Boxed Side

<!-- TODO: Introduction -->

## Basic HTML

```html
<div class="boxed-side">
  <div class="boxed-side__content">
    <h2 class="boxed-side__title"></h2>
    <p class="boxed-side__description"></p>
    <a class="boxed-side__button button"></a>
  </div>
  
  <img src="" alt="" class="boxed-side__image">
</div>
```

### Emmet Code
```emmet
.boxed-side>(.boxed-side__content>h2.boxed-side__title+p.boxed-side__description+a.boxed-side__button)+(img.boxed-side__image)
```

## Useage

The mixin can be overloaded by adding any necessary overwrite styles directly into the include. The mixin utalizes an `@content;` flag at the end of all base styles.

*Warning: Test all cascading styles when you overload the mixin, as it may cause unexpected concequiences.*

```scss
@use 'lv';

@include lv.c-boxed-side {
  grid-row-gap:3rem;
  grid-column-gap:1rem;
  margin-bottom:2rem;
}
```
