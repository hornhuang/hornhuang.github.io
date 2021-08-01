'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "91a2e5dcb3f6bbd5d8fbc73b2270ac10",
"favicon.ico": "6aa09b1160077b80d05efb64b3f37cb0",
"index.html": "f456ef26fccc015371b91723bcad5da6",
"/": "f456ef26fccc015371b91723bcad5da6",
"main.dart.js": "0c46168efbd33ec7812270538bf3ca20",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ebe691ea1816afa2d11cde75d684d9c9",
"icons/icon-1024.png": "f15525b6ef63829b8b38664e1cc41513",
"icons/Icon-512.png": "bb562f153dcd2ceed1e2ab7bfac7c8f3",
"manifest.json": "7d265bdac5e03265b136453c9ce85fc6",
"assets/AssetManifest.json": "fab9b94e80ab907727b2f2830d8f629d",
"assets/NOTICES": "21952a28a7a40bfe3d67f69d0436b0b6",
"assets/FontManifest.json": "a21e71fd69a8da0705ea6e1eb3633597",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/empty-background.png": "bbe186d2e97309d4ac58ae90a73f7f3c",
"assets/assets/images/empty_home_bg.png": "bbe186d2e97309d4ac58ae90a73f7f3c",
"assets/assets/images/emoji/exclamation-question.svg": "bc9ca07e7ae76865700e702f15c47e8a",
"assets/assets/images/emoji/checkmark.svg": "e895ba51b2d0ab2b7be7bf9a456bf083",
"assets/assets/images/emoji/warning-sign.svg": "f5c2b9c58285894a0bc92613c6e15cdb",
"assets/assets/images/emoji/location-pin.svg": "e7873571cf03f87ca5b4d9226392ea3c",
"assets/assets/images/emoji/sparkles.svg": "376ea52fafde008e1525325c7884629e",
"assets/assets/images/emoji/fire.svg": "489478cf75d085eedc71c4f2526eeda9",
"assets/assets/images/emoji/hundred-points.svg": "5925bf28d01672b7c995af4d2a762c8a",
"assets/assets/images/emoji/confetti.svg": "33fe66e1c2984aff8e64673b9c580499",
"assets/assets/images/emoji/folded-hands.svg": "58e6c4cc89e8530e9b53b067a69b1059",
"assets/assets/images/emoji/smiling-eyes.svg": "b96322430cde81227485f5b8e08bdfa2",
"assets/assets/images/emoji/sunglasses-face.svg": "1582bb536d6ed699cb1f543f76ff4364",
"assets/assets/images/emoji/tears-of-joy-face.svg": "09bcb46d1aa87905cd716ae6944bc07c",
"assets/assets/images/emoji/shooting-star.svg": "70b42fe64e31d17d0d5218d2d702485a",
"assets/assets/images/emoji/palms-up.svg": "0c243fe5f0c710eacf2607e6cec27d12",
"assets/assets/images/emoji/crying-face.svg": "78dca428a691db3270d8cf4a7ec415f6",
"assets/assets/images/emoji/pile-of-poo.svg": "34f62966ebb5e40b25a1046e6fc3a08f",
"assets/assets/images/emoji/beers.svg": "cebb0ea4e5a9c5a548bb1c5ed5c1f326",
"assets/assets/images/emoji/red-heart.svg": "3b7f8c6b6860f25459e14812afd7c503",
"assets/assets/images/emoji/kissing-face.svg": "c1824a74dfa2eea4f927e99d5725ff15",
"assets/assets/images/emoji/dizzy-face.svg": "6c7a3e103cf11f05099fa93a517cdf66",
"assets/assets/images/emoji/squinting-face.svg": "9d37a3ad9cd710f9860e26d13dd54042",
"assets/assets/images/emoji/heart-eyes.svg": "4c9919700196f03ed30d955ffe4d9363",
"assets/assets/images/emoji/cool.svg": "58710a539aca7f3b92e7cbd59fb92817",
"assets/assets/images/emoji/musical-notes.svg": "89a44c4a14aa3cfb5129aa049cd90f9c",
"assets/assets/images/logos/2.0x/flutterfolio-logo.png": "fc79777cac5004b6c383497519ec79e2",
"assets/assets/images/logos/flutterfolio-logo.png": "74a8ce7d7c594c1439242440741da290",
"assets/assets/images/orange.jpg": "d6e24aa8bad1f4e9ecffa2da7db01b99",
"assets/assets/images/icons/add.png": "c648ee41b11aa7adbb62b152eb708b56",
"assets/assets/images/icons/add-page.png": "b29ff14442527ca32d21f3326ecb136b",
"assets/assets/images/icons/emoji.png": "e4eb33b1562f416faf50f6f39112ac79",
"assets/assets/images/icons/website.png": "b5a19dc979c390e17a7a85ef3f8dcdd8",
"assets/assets/images/icons/link-out.png": "60d4f64763e5e02e3b57b656a0a4b4c6",
"assets/assets/images/icons/2.0x/add.png": "eea1720a62f261e6a28308d21ab46cad",
"assets/assets/images/icons/2.0x/add-page.png": "1abb31949f67c5f28f38185888ecaa01",
"assets/assets/images/icons/2.0x/emoji.png": "7e74336bc4e70c6a1cccfd22d6bf3e27",
"assets/assets/images/icons/2.0x/link-out.png": "332e15e8a5dac38341f4fc255372b7d2",
"assets/assets/images/icons/2.0x/github.png": "eb3304c859bc03d64f81bb061da66cff",
"assets/assets/images/icons/2.0x/scraps.png": "cf5c178a904a3f94a8da75d97d93995d",
"assets/assets/images/icons/2.0x/send-backward.png": "962b958e683ec4164682f7d46b9d7a68",
"assets/assets/images/icons/2.0x/view.png": "699fc80ad4e86bbb149285377f06bd16",
"assets/assets/images/icons/2.0x/share.png": "f984e4b79160b21b1ef69335fccdc0c0",
"assets/assets/images/icons/2.0x/toggle-list.png": "634fdcc8bf0bc87174692deb34526d7d",
"assets/assets/images/icons/2.0x/star.png": "a0685c66d505f83f89f8d9da12e24fd3",
"assets/assets/images/icons/2.0x/trashcan.png": "a40940974759d8743114cce10b70eb9a",
"assets/assets/images/icons/2.0x/move-forward.png": "cc66a99f66c469de64b2b5f939dab386",
"assets/assets/images/icons/2.0x/toggle-carousel.png": "ec322454e3eb245ed89f59dba2137bb0",
"assets/assets/images/icons/2.0x/camera.png": "81f3f062703807cba5128aafa55a7477",
"assets/assets/images/icons/2.0x/text.png": "32132d4c1dfcc2e74d07915743afdd85",
"assets/assets/images/icons/2.0x/image.png": "6101b477801885af3ecb0e27eaf98dbf",
"assets/assets/images/icons/github.png": "c70cac8e974e757fd7a65efa85686888",
"assets/assets/images/icons/scraps.png": "1b9bb8b75c9309f32b3cc0a59d37a93c",
"assets/assets/images/icons/3.0x/add.png": "575568960697842fca74bfc8609902d9",
"assets/assets/images/icons/3.0x/add-page.png": "3431ba5a4347a40111996d3fada8dc65",
"assets/assets/images/icons/3.0x/emoji.png": "c40509ac80b406c6ce90340213933b3d",
"assets/assets/images/icons/3.0x/link-out.png": "442e1228751f46bdfc98d1e9c049e203",
"assets/assets/images/icons/3.0x/github.png": "f17614a0b29de05f0456ae8ab0535861",
"assets/assets/images/icons/3.0x/scraps.png": "c5dd33e60fe3df1374a4be487e6943ad",
"assets/assets/images/icons/3.0x/send-backward.png": "f4733469a8dbc96fdefcc2f82f79dab6",
"assets/assets/images/icons/3.0x/view.png": "bc43e24117af5cfa266f80c2f7fed51e",
"assets/assets/images/icons/3.0x/share.png": "b0c04ea1cf5d6488cddd51f13dea7977",
"assets/assets/images/icons/3.0x/toggle-list.png": "1cf8c991c01de03819a0d4e545157b2d",
"assets/assets/images/icons/3.0x/star.png": "b2d723f68be2c553eae1b8bb75941186",
"assets/assets/images/icons/3.0x/trashcan.png": "29106d13d82a9dc1f6b4f17f68dbb3b5",
"assets/assets/images/icons/3.0x/move-forward.png": "715ff4fa28a4975669985fcc27ece582",
"assets/assets/images/icons/3.0x/toggle-carousel.png": "8c443c140d495389c24c45fe33eac800",
"assets/assets/images/icons/3.0x/camera.png": "569360acb74da17a96387054f20775b4",
"assets/assets/images/icons/3.0x/text.png": "d5fb38fe4340cbaf91e1605877ef7e8f",
"assets/assets/images/icons/3.0x/image.png": "16eeb4c187e8c8a80f7b926efd4ca23d",
"assets/assets/images/icons/send-backward.png": "9e82da646a09189ecdc78b0053eacd01",
"assets/assets/images/icons/view.png": "431fe2093d7cc6fa50e7aae85a04947a",
"assets/assets/images/icons/share.png": "f21ca8c98e7de3851936fdf295350119",
"assets/assets/images/icons/toggle-list.png": "78f4bbe844789eb9929a967531ac506e",
"assets/assets/images/icons/star.png": "aadfa90a9c62d370fceb34dab58b2f59",
"assets/assets/images/icons/trashcan.png": "b6b645efc9dabbd3ae5c1aac93b33407",
"assets/assets/images/icons/move-forward.png": "c6087036a71d894d6789a715002368b4",
"assets/assets/images/icons/toggle-carousel.png": "743a907851736cf81a06cad07a0b5f9f",
"assets/assets/images/icons/camera.png": "413a15be5c1e14f0015cacb24a831901",
"assets/assets/images/icons/text.png": "36374b6b8d0fa4a7132d91a9b84d93ad",
"assets/assets/images/icons/image.png": "4aac65721323e01eeaf64a05b8bea893",
"assets/assets/images/profile.png": "46599ff041236a1250bce38eb1a56d2c",
"assets/assets/images/landing_page/dashedLine-desktop.png": "fcb4c2791ad3409817c1b9c339a3e9d4",
"assets/assets/images/landing_page/dashedLine-mobile.png": "ffe55e1eb98142ee4213c27ecf2ee4bd",
"assets/assets/images/landing_page/tablet.png": "0b5080751121677ae7aa26ab88616930",
"assets/assets/images/landing_page/laptop.png": "e5af39d13bfb1cd4945cfc4d7b309b65",
"assets/assets/images/landing_page/web.png": "a817ff858d648b073fdaa6d2f88bc061",
"assets/assets/images/landing_page/phone.png": "ffdb6bb48ccffd38e3757050c4ecdc67",
"assets/assets/fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/Fraunces_72pt-SemiBold.ttf": "24d99b5a0cd95e3a1a33022d62cac38f",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/scraps/Mali-Medium.ttf": "20c8f9ec2584d85bd116e6e00734dc74",
"assets/assets/fonts/scraps/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/scraps/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/assets/fonts/scraps/Caveat-Medium.ttf": "a33c81836f5a681e2e1877b91885feb9",
"assets/assets/fonts/scraps/Amiri-Regular.ttf": "21e6d71c2301e16cfc210492896a4dd5",
"assets/assets/fonts/scraps/PathwayGothicOne-Regular.ttf": "5ffb53b1b45fe824e77da19ef1fb1c1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
