# Boxed Side

<!-- TODO: Introduction -->

## Basic HTML

```html
<div class="card">
  <div class="card__media">
    <img src="https://picsum.photos/300/200" class="card__image" />
  </div>

  <div class="card__container card__is-content">
    <h3 class="card__header">Lorem ipsum dolor</h3>
    <h4 class="card__subHeader">Header 4</h4>

    <div class="card__text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate facilis officiis eveniet error
        excepturi asperiores repudiandae dolorem, tempora amet ipsam dolore laboriosam! Neque ut molestias alias
        cumque voluptas similique.</p>
    </div>

    <a href="#" class="card__button button">Read More</a>
  </div>
</div>
```

### Emmet Code
```emmet
.card>(.card__media>img.card__image)+(.card__container.card__is-content>.card__header+.card__subHeader+.card__text+a.card__button.button)
```

## Useage

The mixin can be overloaded by adding any necessary overwrite styles directly into the include. The mixin utalizes an `@content;` flag at the end of all base styles.

*Warning: Test all cascading styles when you overload the mixin, as it may cause unexpected concequiences.*

```scss
@use 'lv';

@include lv.card {
  grid-row-gap:3rem;
  grid-column-gap:1rem;
  margin-bottom:2rem;
}
```
