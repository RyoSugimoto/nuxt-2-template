class MediaQuery {
  query;
  triggers = ['resize', 'DOMContentLoaded', 'load'];
  debounceTimer = 0;
  isMatched = null;
  handlers = [];

  constructor(query) {
    this.query = query;

    this._attach();
  }

  match(fn) {
    this.on('match', fn);
    return this;
  }

  unmatch(fn) {
    this.on('unmatch', fn);
    return this;
  }

  watch(fn) {
    this.on('watch', fn);
    return this;
  }

  on(eventName, fn) {
    this.handlers.push({
      eventName: eventName,
      callback: fn
    });
    return this;
  }

  _attach() {
    for (let i = 0; i < this.triggers.length; i++) {
      window.addEventListener(this.triggers[i], () => {
        window.cancelAnimationFrame(this.debounceTimer);
        this.debounceTimer = window.requestAnimationFrame(this._test.bind(this));
      });
    }

    return this;
  }

  _test() {
    const isMatched = window.matchMedia(this.query).matches;

    if (isMatched !== this.isMatched) {
      this._dispatch('watch', isMatched);
    }

    if (isMatched && !this.isMatched) {
      this.isMatched = true;

      this._dispatch('match', isMatched);
    } else if (!isMatched && this.isMatched !== false) {
      this.isMatched = false;

      this._dispatch('unmatch', isMatched);
    }
  }

  _dispatch(eventName, isMatched) {
    this.handlers.filter((handler, index) => {
      if (handler.eventName !== eventName) {
        return false;
      }

      handler.callback({
        eventName,
        index,
        isMatched,
        callback: handler.callback,
        query: this.query
      });
      return true;
    });
  }

}

export default MediaQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtbWVkaWEtcXVlcnktbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvdHMvbWVkaWEtcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEhhbmRsZXIge1xuICBldmVudE5hbWU6IHN0cmluZ1xuICBjYWxsYmFjazogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFRdWVyeSB7XG4gIHJlYWRvbmx5IHF1ZXJ5OiBzdHJpbmdcbiAgcmVhZG9ubHkgdHJpZ2dlcnMgPSBbXG4gICAgJ3Jlc2l6ZScsICdET01Db250ZW50TG9hZGVkJywgJ2xvYWQnXG4gIF1cbiAgcHJpdmF0ZSBkZWJvdW5jZVRpbWVyOiBudW1iZXIgPSAwXG4gIHByaXZhdGUgaXNNYXRjaGVkOiBib29sZWFuIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBoYW5kbGVyczogSGFuZGxlcltdID0gW11cblxuICBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5fYXR0YWNoKClcbiAgfVxuXG4gIG1hdGNoKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub24oJ21hdGNoJywgZm4pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHVubWF0Y2goZm46IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5vbigndW5tYXRjaCcsIGZuKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB3YXRjaChmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uKCd3YXRjaCcsIGZuKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBvbihldmVudE5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgY2FsbGJhY2s6IGZuLFxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpZ2dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJpZ2dlcnNbaV0sICgpID0+IHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZGVib3VuY2VUaW1lcilcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl90ZXN0LmJpbmQodGhpcykpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcHJpdmF0ZSBfdGVzdCgpIHtcbiAgICBjb25zdCBpc01hdGNoZWQgPSB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLnF1ZXJ5KS5tYXRjaGVzXG4gICAgaWYgKGlzTWF0Y2hlZCAhPT0gdGhpcy5pc01hdGNoZWQpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoKCd3YXRjaCcsIGlzTWF0Y2hlZClcbiAgICB9XG4gICAgaWYgKGlzTWF0Y2hlZCAmJiAhdGhpcy5pc01hdGNoZWQpIHtcbiAgICAgIHRoaXMuaXNNYXRjaGVkID0gdHJ1ZVxuICAgICAgdGhpcy5fZGlzcGF0Y2goJ21hdGNoJywgaXNNYXRjaGVkKVxuICAgIH0gZWxzZSBpZiAoIWlzTWF0Y2hlZCAmJiB0aGlzLmlzTWF0Y2hlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNNYXRjaGVkID0gZmFsc2VcbiAgICAgIHRoaXMuX2Rpc3BhdGNoKCd1bm1hdGNoJywgaXNNYXRjaGVkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rpc3BhdGNoKGV2ZW50TmFtZTogc3RyaW5nLCBpc01hdGNoZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmhhbmRsZXJzLmZpbHRlcigoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChoYW5kbGVyLmV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaGFuZGxlci5jYWxsYmFjayh7XG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGlzTWF0Y2hlZCxcbiAgICAgICAgY2FsbGJhY2s6IGhhbmRsZXIuY2FsbGJhY2ssXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgfSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1lZGlhUXVlcnkiLCJxdWVyeSIsInRyaWdnZXJzIiwiZGVib3VuY2VUaW1lciIsImlzTWF0Y2hlZCIsImhhbmRsZXJzIiwiY29uc3RydWN0b3IiLCJfYXR0YWNoIiwibWF0Y2giLCJmbiIsIm9uIiwidW5tYXRjaCIsIndhdGNoIiwiZXZlbnROYW1lIiwicHVzaCIsImNhbGxiYWNrIiwiaSIsImxlbmd0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90ZXN0IiwiYmluZCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiX2Rpc3BhdGNoIiwiZmlsdGVyIiwiaGFuZGxlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiTUFLcUJBO0FBQ1ZDLEVBQUFBLEtBQUs7QUFDTEMsRUFBQUEsUUFBUSxHQUFHLENBQ2xCLFFBRGtCLEVBQ1Isa0JBRFEsRUFDWSxNQURaLENBQUg7QUFHVEMsRUFBQUEsYUFBYSxHQUFXLENBQVg7QUFDYkMsRUFBQUEsU0FBUyxHQUFtQixJQUFuQjtBQUNUQyxFQUFBQSxRQUFRLEdBQWMsRUFBZDs7QUFFaEJDLEVBQUFBLFlBQVlMO0FBQ1YsU0FBS0EsS0FBTCxHQUFhQSxLQUFiOztBQUNBLFNBQUtNLE9BQUw7QUFDRDs7QUFFREMsRUFBQUEsS0FBSyxDQUFDQyxFQUFEO0FBQ0gsU0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJELEVBQWpCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURFLEVBQUFBLE9BQU8sQ0FBQ0YsRUFBRDtBQUNMLFNBQUtDLEVBQUwsQ0FBUSxTQUFSLEVBQW1CRCxFQUFuQjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVERyxFQUFBQSxLQUFLLENBQUNILEVBQUQ7QUFDSCxTQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQkQsRUFBakI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFREMsRUFBQUEsRUFBRSxDQUFDRyxTQUFELEVBQW9CSixFQUFwQjtBQUNBLFNBQUtKLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQjtBQUNqQkQsTUFBQUEsU0FBUyxFQUFFQSxTQURNO0FBRWpCRSxNQUFBQSxRQUFRLEVBQUVOO0FBRk8sS0FBbkI7QUFJQSxXQUFPLElBQVA7QUFDRDs7QUFFT0YsRUFBQUEsT0FBTztBQUNiLFNBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLZCxRQUFMLENBQWNlLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0FBQzdDRSxNQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLEtBQUtqQixRQUFMLENBQWNjLENBQWQsQ0FBeEIsRUFBMEM7QUFDeENFLFFBQUFBLE1BQU0sQ0FBQ0Usb0JBQVAsQ0FBNEIsS0FBS2pCLGFBQWpDO0FBQ0EsYUFBS0EsYUFBTCxHQUFxQmUsTUFBTSxDQUFDRyxxQkFBUCxDQUE2QixLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBN0IsQ0FBckI7QUFDRCxPQUhEO0FBSUQ7O0FBQ0QsV0FBTyxJQUFQO0FBQ0Q7O0FBRU9ELEVBQUFBLEtBQUs7QUFDWCxVQUFNbEIsU0FBUyxHQUFHYyxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsS0FBS3ZCLEtBQXZCLEVBQThCd0IsT0FBaEQ7O0FBQ0EsUUFBSXJCLFNBQVMsS0FBSyxLQUFLQSxTQUF2QixFQUFrQztBQUNoQyxXQUFLc0IsU0FBTCxDQUFlLE9BQWYsRUFBd0J0QixTQUF4QjtBQUNEOztBQUNELFFBQUlBLFNBQVMsSUFBSSxDQUFDLEtBQUtBLFNBQXZCLEVBQWtDO0FBQ2hDLFdBQUtBLFNBQUwsR0FBaUIsSUFBakI7O0FBQ0EsV0FBS3NCLFNBQUwsQ0FBZSxPQUFmLEVBQXdCdEIsU0FBeEI7QUFDRCxLQUhELE1BR08sSUFBSSxDQUFDQSxTQUFELElBQWMsS0FBS0EsU0FBTCxLQUFtQixLQUFyQyxFQUE0QztBQUNqRCxXQUFLQSxTQUFMLEdBQWlCLEtBQWpCOztBQUNBLFdBQUtzQixTQUFMLENBQWUsU0FBZixFQUEwQnRCLFNBQTFCO0FBQ0Q7QUFDRjs7QUFFT3NCLEVBQUFBLFNBQVMsQ0FBQ2IsU0FBRCxFQUFvQlQsU0FBcEI7QUFDZixTQUFLQyxRQUFMLENBQWNzQixNQUFkLENBQXFCLENBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUNuQixVQUFJRCxPQUFPLENBQUNmLFNBQVIsS0FBc0JBLFNBQTFCLEVBQXFDO0FBQ25DLGVBQU8sS0FBUDtBQUNEOztBQUNEZSxNQUFBQSxPQUFPLENBQUNiLFFBQVIsQ0FBaUI7QUFDZkYsUUFBQUEsU0FEZTtBQUVmZ0IsUUFBQUEsS0FGZTtBQUdmekIsUUFBQUEsU0FIZTtBQUlmVyxRQUFBQSxRQUFRLEVBQUVhLE9BQU8sQ0FBQ2IsUUFKSDtBQUtmZCxRQUFBQSxLQUFLLEVBQUUsS0FBS0E7QUFMRyxPQUFqQjtBQU9BLGFBQU8sSUFBUDtBQUNELEtBWkQ7QUFhRDs7Ozs7OyJ9