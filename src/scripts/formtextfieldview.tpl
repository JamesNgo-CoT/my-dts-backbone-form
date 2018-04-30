
<div class="form-group">
  <label
    <% if (config.id) { %>
    for="<%- config.id %>"
    <% } %>
  ><%- config.title %></label>
  <% if (config.pre_help_text) { %>
  <span class="help-block"><%- config.pre_help_text %></span>
  <% } %>
  <input
    <% if (config.id) { %>
    name="<%- config.id %>"
    <% } %>
    type="text"
    class="form-control"
    <% if (config.id) { %>
    id="<%- config.id %>"
    <% } %>
    <% if (config.pre_help_text || config.post_help_text) { %>
    aria-describedby="<%- [config.pre_help_text, config.post_help_text].filter(function(value) { return value; }).join(' ') %>"
    <% } %>
  >
  <% if (config.post_help_text) { %>
  <span class="help-block"><%- config.post_help_text %></span>
  <% } %>
</div>
