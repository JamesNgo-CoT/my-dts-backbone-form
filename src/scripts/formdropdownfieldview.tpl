
<div class="form-group">
  <label
    <% if (config.id) { %>
    for="<%- config.id %>"
    <% } %>
  ><%- config.title %></label>
  <% if (config.pre_help_text) { %>
  <span class="help-block"><%- config.pre_help_text %></span>
  <% } %>
  <select
    <% if (config.id) { %>
    name="<%- config.id %>"
    <% } %>
    class="form-control"
    <% if (config.id) { %>
    id="<%- config.id %>"
    <% } %>
    <% if (config.pre_help_text || config.post_help_text) { %>
    aria-describedby="<%- [config.pre_help_text, config.post_help_text].filter(function(value) { return value; }).join(' ') %>"
    <% } %>
  >
    <option value=""></option>
    <% if (config.choices) { %>
    <% for (var i = 0, l = config.choices.length; i < l; i++) { %>
    <option value="<%- typeof config.choices[i] === 'string' ? config.choices[i] : config.choices[i].value || config.choices[i].text %>">
      <%- typeof config.choices[i] === 'string' ? config.choices[i] : config.choices[i].text %>
    </option>
    <% } %>
    <% } %>
  </select>
  <% if (config.post_help_text) { %>
  <span class="help-block"><%- config.post_help_text %></span>
  <% } %>
</div>
