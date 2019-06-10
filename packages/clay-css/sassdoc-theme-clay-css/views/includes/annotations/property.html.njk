{% if item.property.length > 0 %}

<h3 class="item__sub-heading">Map structure</h3>

<table class="item__parameters">
  <thead>
    <tr>
      <th scope="col"><span class="visually-hidden">{{ item.type }} key </span>Name</th>
      <th scope="col"><span class="visually-hidden">{{ item.type }} key </span>Description</th>
      <th scope="col"><span class="visually-hidden">{{ item.type }} key </span>Type</th>
      <th scope="col"><span class="visually-hidden">{{ item.type }} key </span>Value</th>
    </tr>
  </thead>

  <tbody>
    {% for prop in item.property %}
      <tr class="item__parameter">
        <th scope="row" data-label="name"><code>{{ prop.name }}</code></th>
        <td data-label="desc">{{ prop.description | default('&mdash;<span class="visually-hidden"> none</span>') | safe }}</td>
        <td data-label="type">
          <code>{{ prop.type | display_as_type }}</code>
        </td>
        <td data-label="default">
        {% if not prop.default %}
          &mdash;<span class="visually-hidden"> none</span>
        {% else %}
          {% if (prop.type|lower).indexOf('color') > -1 and prop.resolvedValue|is_color == true %}
            <code class="color-preview--inline" style="background: {{ prop.resolvedValue }}; color: {{ prop.resolvedValue | yiq }};">{{ prop.default }}</code>
          {% else %}
            <code>{{ prop.default }}</code>
          {% endif %}
        {% endif %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

{% endif %}
