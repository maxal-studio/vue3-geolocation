# vue3-geolocation

> Get users geolocation
## Plugin install

```sh
npm install vue3-geolocation
````

in  your main.js
```
import Vue3Geolocation from 'vue3-geolocation';
app.use(VueGeolocation);
```

## Usage
Inside a Vue Component
```
<script>
export default {
  name: "DemoComponent",
  created() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
```
Will prompt a [Geolocation Request](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)

or to watch a location

```
this.$watchLocation(options)
  .then(coordinates => {
    console.log(coordinates);
  })
```

you can clear the watcher

```
this.$clearLocationWatch(watchID)
```

please refer to the Geolocation docs to reference how to get a watchID


### Options
See [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

#### Example
```
this.$getLocation({
	enableHighAccuracy: bool, //defaults to false
	timeout: Infinity, //defaults to Infinity
	maximumAge: int //defaults to 0
	
})
  .then(coordinates => {
    console.log(coordinates);
  });
```

### Forcing failure in automated testing

If you need to setup automated testing in your application, and you need to force failure of geolocation to test how your application behaves, you can pass a second argument (forceReject) to this.$getGelocation and this.$watchLocation:

```
this.$getLocation(positionOptions, forceReject)

this.$watchLocation(positionOptions, forceReject)
```
if the parameter is `true`, the promise will be rejected with a special error message.