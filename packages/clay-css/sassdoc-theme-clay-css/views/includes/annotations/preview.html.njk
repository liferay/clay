{# Placeholders #}
{% if item.context.type == "placeholder" %}

<div class="item__code-wrapper">
  <pre class="item__code  item__code--togglable  language-scss"
    data-current-state="collapsed"
    data-expanded="%{{ item.context.name }} { {{ item.context.code }} }"
    data-collapsed="%{{ item.context.name }} { ... }"><code>%{{ item.context.name }} { ... }</code></pre>

  {% if basePath %}
    <a href="{{ basePath }}/{{ item.file.path }}#L{{ item.context.line.start }}-L{{ item.context.line.end }}" class="item__source-link" target="_blank">View source</a>
  {% endif %}
</div>

{# Variables #}
{% elseif item.context.type == "variable" %}

<div class="item__code-wrapper">
  <pre class="item__code  language-scss"><code>${{ item.context.name }}: {{ item.context.value }}{% if item.context.scope !== "private" %} !{{ item.context.scope }}{% endif %};</code></pre>

  {% if (item.type|lower).indexOf('color') > -1 and item.resolvedValue|is_color == true %}
    <span class="color-preview--block" style="background: {{ item.resolvedValue }};"></span>
  {% endif %}

  {% if basePath %}
    <a href="{{ basePath }}/{{ item.file.path }}#L{{ item.context.line.start }}-L{{ item.context.line.end }}" class="item__source-link" target="_blank">View source</a>
  {% endif %}
</div>

{# Plain CSS #}
{% elseif item.context.type == "css" %}
<div class="item__code-wrapper">
  <pre class="item__code  item__code--togglable  language-scss"
    data-current-state="collapsed"
    data-expanded="<code>{{ item.context.name }} {
  {{ item.context.value }}
}</code>"
    data-collapsed="{{ item.context.name }} { ... }"><code>{{ item.context.name }} { ... }</code></pre>
</div>

{# Functions and mixins #}
{% else %}

{% set parameters_string = '' %}
{% for parameter in item.parameter %}
  {% set value = '$' + parameter.name %}

  {% if parameter.default %}
    {% set value = value + ': ' + parameter.default %}
  {% endif %}

  {% if parameter.type|lower === "arglist" %}
    {% set value = value + '...' %}
  {% endif %}

  {% if loop.first %}
    {% set parameters_string = value %}
  {% else %}
    {% set parameters_string = parameters_string + ', ' + value %}
  {% endif %}
{% endfor %}

<div class="item__code-wrapper">
  <pre class="item__code  item__code--togglable  language-scss"
    data-current-state="collapsed"
    data-expanded="@{{ item.context.type }} {{ item.context.name }}({{ parameters_string }}) { {{ item.context.code }} }"
    data-collapsed="@{{ item.context.type }} {{ item.context.name }}({{ parameters_string }}) { ... }"><code>@{{ item.context.type }} {{ item.context.name }}({{ parameters_string }}) { ... }</code></pre>

  {% if basePath %}
    <a href="{{ basePath }}/{{ item.file.path }}#L{{ item.context.line.start }}-L{{ item.context.line.end }}" class="item__source-link" target="_blank">View source</a>
  {% endif %}
</div>

{% endif %}
