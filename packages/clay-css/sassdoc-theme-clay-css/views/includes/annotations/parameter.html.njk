<h3 class="item__sub-heading">Parameters</h3>

{% if item.parameter.length > 0 %}

  <table class="item__parameters">
    <thead>
      <tr>
        <th scope="col"><span class="visually-hidden">{{ item.type }} parameter </span>Name</th>
        <th scope="col"><span class="visually-hidden">{{ item.type }} parameter </span>Description</th>
        <th scope="col"><span class="visually-hidden">{{ item.type }} parameter </span>Type</th>
        <th scope="col"><span class="visually-hidden">{{ item.type }} parameter </span>Default value</th>
      </tr>
    </thead>
    <tbody>
      {% for parameter in item.parameter %}
        <tr class="item__parameter">
          <th scope="row" data-label="name"><code>${{ parameter.name }}</code></th>
          <td data-label="desc">{{ parameter.description|default('&mdash;<span class="visually-hidden"> none</span>')|safe }}</td>
          <td data-label="type">
            <code>
              {% if parameter.type == '*' %}
                Any
              {% else %}
                {{ parameter.type | display_as_type }}
              {% endif %}
            </code>
          </td>
          <td data-label="default">
          {% if not parameter.default %}
            &mdash;<span class="visually-hidden"> none</span>
          {% else %}
            {% if (parameter.type|lower).indexOf('color') > -1 and parameter.resolvedValue|is_color == true %}
              <code class="color-preview--inline" style="background:{{ parameter.resolvedValue }}; color: {{ parameter.resolvedValue | yiq }}">{{ parameter.default }}</code>
            {% else %}
              <code>{{ parameter.default }}</code>
            {% endif %}
          {% endif %}
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>

{% else %}

  <p>None.</p>

{% endif %}
