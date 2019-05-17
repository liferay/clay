{% set title_displayed = false %}
{% for require in item.require %}

  {% if (display.access.indexOf(require.item.access) != -1) and not (not display.alias and require.item.alias) or require.external %}
    {% if not title_displayed %}
      {% set title_displayed = true %}
      <h3 class="item__sub-heading">Requires</h3>
      <ul class="list-unstyled">
    {% endif %}

    {% if require.external %}
      <li class="item__description  item__description--inline"><span class="item__cross-type">[external]</span>
        {% if require.url %}
          <a href="{{ require.url }}"><code>{{ require.name }}</code></a>  {{ require.description }}</li>
        {% else %}
          <code>{{ require.name }}</code>
        {% endif %}
        {% if require.description %}
          &mdash; {{ require.description }}
        {% endif %}
      </li>
    {% else %}
      <li class="item__description  item__description--inline"><span class="item__cross-type">[{{ require.item.context.type }}]</span>
        <a href="#{{ require.item.group }}-{{ require.item.context.type }}-{{ require.item.context.name }}"><code>{{ require.item.context.name | unescape }}</code></a>
        {% if require.description %}
          &mdash; {{ require.description }}
        {% endif %}
      </li>
    {% endif %}
  {% endif %}

{% endfor %}

{% if title_displayed %}
</ul>
{% endif %}
