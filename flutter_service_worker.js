'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a32cbe89d51a3e073bba58946809702f",
"index.html": "46be9ebf158757c89ef4a370a4a8620c",
"/": "46be9ebf158757c89ef4a370a4a8620c",
"main.dart.js": "5677100bde3e89d262904ac5c841519b",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Logo2.png": "6785821671c0b9473bda7ccdc87f4cbc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fa2765291ef887a073ac55fa05242e07",
"assets/AssetManifest.json": "4ca4f5134f2bba9602e25ad6abd3868e",
"assets/NOTICES": "60b56dd387ce1bb694cad3a67025afba",
"assets/FontManifest.json": "71799cf577402abaedc9a1ff5120c7c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/background4.png": "89a92908d024b0281a8bd10d0c697086",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/AppStore.svg": "57272347647449ab686d88248fc9dc9e",
"assets/assets/images/1024.png": "ea2daac5e88b083e4b8ea53be884ec73",
"assets/assets/images/contactimage.png": "99a70ad9718cd59a63570e080c1e4368",
"assets/assets/images/IntervalTimer2.png": "f0a2949b2efdee2c5e6a6e762d817308",
"assets/assets/images/flutterimage.png": "738a6fb8b90dae4386746b69cf404227",
"assets/assets/images/twiter_logo.png": "c246ee5d98b86b9955ff9669b766dfc0",
"assets/assets/images/background5.png": "16d7b3a02a7852105735fb3b16218340",
"assets/assets/images/web%2520design.png": "62529f59033470b654cff5087e01b979",
"assets/assets/images/background2.png": "af259a1a11c923cf5c5b5c4ff25bc04e",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/nagareru.png": "a9e042b3cef5b072fa96b53cff06bd92",
"assets/assets/images/tkdesign.png": "2ab9ca9fb8f4434519fda6d0f28db4eb",
"assets/assets/images/Flutter3.png": "f81af8628c886c4aa14687fe77c6afb5",
"assets/assets/images/website.png": "950f7c884377e313440f22b3541698ce",
"assets/assets/images/background3.png": "48ec2e619873c3fa580fa24aed524318",
"assets/assets/images/image-qiitan.png": "572179a3bbde375850422ea48b2b6272",
"assets/assets/images/Web9.png": "8d0b3e20e783728344168efb78ad1300",
"assets/assets/images/Timer5.png": "4c561bfb1813591ccce6789c804cf0f2",
"assets/assets/images/Timer4.png": "ea8d976a0c73998f0c58bca0604e2ff2",
"assets/assets/images/Web8.png": "834de73d8fde4093c4ccc61da55ea75a",
"assets/assets/images/Flutterapp%2520image.png": "128ae6746a5523e9fd5d3638cc752c9d",
"assets/assets/images/FlutterwebApp.png": "5fe42987bbe004900dd158b9eac70635",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/Timer6.png": "14d25a98652613b90e7f41b2a839f984",
"assets/assets/images/iosimage.png": "8f7dbe8e0ac7d196a7853747d715fd1c",
"assets/assets/images/Timer7.png": "6dba1d9b247a70bf7a9db24ba516773a",
"assets/assets/images/kakukaku393.png": "e386682597ffa1e633e3a78e63a23e8b",
"assets/assets/images/MitchKoko.png": "9fc0faa5553dddb3f756d8f4946e74ec",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/RightStick.png": "0f94b13c495e3d0a6ab438638d89e1e6",
"assets/assets/images/Timer3.png": "e18a281bb6110135cb2e28bbb334d7ac",
"assets/assets/images/github_logo.png": "d5e3364fa6a900c97bdf062a1bcc2515",
"assets/assets/images/Youtube2.png": "9ffc17d8234d69587aea04dff27e9abc",
"assets/assets/images/Timer2.png": "932c7b2dc14eb631736a1052063d4052",
"assets/assets/images/kakukaku396.png": "6096baa89ad242f6871513233109b2a3",
"assets/assets/images/Timer0.png": "6b487f7d4530ce0d79f1856f8b774c1f",
"assets/assets/images/Flutterapp.png": "cf9adbc269cf291d17dddefb146acff8",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/Timer1.png": "d7e73af5614af7aa1b447e8e05ae39b6",
"assets/assets/images/iOS%2520app.png": "d58c48b58b1b420c5ea3e460a308fe58",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/irokage386.png": "6fe2298acd73e6ec42e104af1800c746",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/icon%2520design2.png": "ac7a91fe4c45d2e4df91f314491182ad",
"assets/assets/images/web1.png": "5b49c66676904bba4222191ca2e2b45e",
"assets/assets/images/irokage387.png": "51584bdb75acaa5319b269b7f91cbea6",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/irokage385.png": "9b44978a2a860e6d1681002be8578a6a",
"assets/assets/images/FlutterUnv.png": "85b98281d08744e724de37eb767b15a8",
"assets/assets/images/web3.png": "1443609a7f1933be555ef1b670544dd6",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/web2.png": "a06426ea3fae5f2d98e58020cd7e714e",
"assets/assets/images/Web10.png": "a9c78c26022b208a2b953d297b7200c5",
"assets/assets/images/111011-mobile-app-promo.json": "9b564e5c5bde4109792ea0f529dd81de",
"assets/assets/images/irokage384.png": "7c38f0b7f7c52eebd828d787a54f7be9",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/83328-web-design-in-blue.json": "b7c9eb15fe4a8d6ad16a4494a1413636",
"assets/assets/images/Web6.png": "e00bf6f88bb7246744325cf34209c620",
"assets/assets/images/Web7.png": "6ae79f01ba2630db2a9d48c2cadd2405",
"assets/assets/images/googleforms.png": "72f962548f5707eef1ed8b49f1086120",
"assets/assets/images/Profile.JPG": "e3f4d150dc5ce5e398a057acb87707ae",
"assets/assets/images/irokage383.png": "904af1e06df5c4a764e067cc43495ef0",
"assets/assets/images/web5.png": "83ecc0d55ab20eb13711eb21a85ed056",
"assets/assets/images/Timer9.png": "9396e83810473772d9a08bb985cb7201",
"assets/assets/images/Timer8.png": "24fe6355178a39cf3c2b021682a95c77",
"assets/assets/images/TheFlutterWay.png": "373c54e4d93873cde213450dc1886752",
"assets/assets/images/Icon%2520image.png": "1b6e81af96d935d951a1e10f12ec6e39",
"assets/assets/images/web4.png": "a9d6d842002779bfdf8554142f1a1e4c",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Swiftapp.png": "1744db862bd2844e80c093075ef82e9d",
"assets/assets/images/zenn.png": "d0ad7b5107723cb8f7efb858bd306771",
"assets/assets/images/70229-contact-us.json": "5e0ae669da423034f1e66d83b330df5c",
"assets/assets/images/85570-background-animation-for-a-simple-project.json": "3cfbab0d08976817501f23d0907b0dea",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/120582-gdsc-modules.json": "83dcca9bb736e2c3d60c5f4bde727e18",
"assets/assets/images/93075-adaptive-web-design.json": "9b2fc2a1c460544468c0886587017e08",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/flutterweb.png": "c36cd41ff56567ce2f618f5f8c34dc10",
"assets/assets/images/FlutterMapp.png": "7fd8cc297c84173b6938c5729407603c",
"assets/assets/images/webdesign2.png": "bb5129dfa0d1f30bfcfc3537ebcb9877",
"assets/assets/images/tklogo2.png": "c6688e03cf16b96628675c493e2d08aa",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/assets/fonts/NotoSansJP-Medium.otf": "d6c74d39a44c519ff736ac55e5d28a46",
"assets/assets/fonts/NotoSansJP-Light.otf": "137761c9e4b05edc375b06c256e9b65a",
"assets/assets/fonts/NotoSansJP-Thin.otf": "e2b92248795c0cd02d9858aaf2a12ec2",
"assets/assets/fonts/NotoSansJP-Bold.otf": "e463c4b3a2d7fbfb917831767da8c24f",
"assets/assets/fonts/NotoSansJP-Black.otf": "5ce4631ec833cd0011936d5653fbd144",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
