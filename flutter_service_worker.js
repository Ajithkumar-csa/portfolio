'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01508a2af6ba9b27c904804a93aa2b93",
".git/config": "311fe185e0d7efe765a64db3c00dd08b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a9d92c58d1de56e914d535c361344fbd",
".git/HEAD": "643637979e7129b8c5da81ec9243ce92",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9340e56f3e157f4b7caae145b7a5a71b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "43f9a0977eceeaf130b81ddc55a53bfb",
".git/logs/refs/heads/main": "df5577e4af92c3812a6559ad84a6e330",
".git/logs/refs/heads/portfolio": "9121cc55c620fe82f649a09ba03089ee",
".git/logs/refs/remotes/origin/main": "59362ea7431d0799e50c59de69ba16bb",
".git/logs/refs/remotes/origin/portfolio": "59362ea7431d0799e50c59de69ba16bb",
".git/objects/01/724a424f717f27994395e4c7510287969089bc": "4a5e17fd46811fe57e66c4d930067b38",
".git/objects/0b/a1ff775c454285111be49290bdc3ac23d29a1b": "0513719022972091f2c14f4a6ec31adb",
".git/objects/16/a8dedbed9f58e7be80b6e27e526a7cbd7e6919": "5a3fb60e592252955f5ffd94dbc48ce2",
".git/objects/18/8e39efda62067a1e1bd3ade9fa8bbf7cfffbe9": "c102c917228eccb3af4ae1eef5dd27c8",
".git/objects/1a/72bbaf10b05da9b3340175c4e51579e3cc5a70": "b37f39447fbdfdd690bbdefdaacbdcde",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/91f8436fa775b5262315391e48c407d232fa8d": "970cb8a3e06b28b8c9210706ce955fa6",
".git/objects/1e/74d790d1efa126a91d71a842160f2cab0cdbdc": "c50f0cb171d3ff4ba35146975673a970",
".git/objects/23/0151b469ad05ef71efdbc6ddbf3c2ded5a2489": "626e31fd7d74f4c2d4b4edca7a1a0d94",
".git/objects/29/605294dcf0f65732bd9f1979d38b99316f77fd": "3c35a8b2850d931ce3271ad5788c6a63",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/b23ae2ba4f391976d2a56f21d8af7d532db25d": "e2c49fcb74579f527f7eb43499faf8db",
".git/objects/2e/f249132b8bbdb8d262cb1a0dd45654d2cd4591": "16aa8044079a7b26f46a1d93288e288e",
".git/objects/36/1fa5e24bc69ab1f5504afcf466f0c8169db63c": "e7adfad10950a322299d22d77d56dff1",
".git/objects/37/5b2d0c1c628dabac7ae50d2acc8f3af8f77767": "b31e46bc30198d0ab22adacdb08543ee",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/71b62ca38778e9b3b8bebf3bc94bd31d11111e": "dab16effb27eeb269a6cd128847ebd7f",
".git/objects/48/e4134c0e64bc3bc3568d389e5e784fdf6278c9": "6d94b0f379e3facf4cee4a46a15877db",
".git/objects/4d/c9ac13d4308f312c9a6152af7c201c2eb85634": "930293dff7ec62c63608e7838ed9b6a0",
".git/objects/4f/9b028448c501519f0003b3441224a82b98dee2": "9d8c91ada10d9842d37848c8392e6378",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/73/69a0e2a694c61b1bbec3a02fbcd7756fa7964b": "9b54170c93d8fc1f67b2f9eaf5704704",
".git/objects/73/b37af244e6ff05e93ee0bd531dd11781e2c9eb": "16d2430e58a94a559af1d0fa337c70f9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/88de0e08ac3e150b0651aee8dc5a738fa5596e": "7dca2acd9a1edbf8479dd3eb5be0f77a",
".git/objects/82/1c9413d2b19c37c01af673a57d8b8cc040e0ae": "7cf7840744e035d0ee829469a10ad869",
".git/objects/87/cfa2f28059b07bd05663d0d73cba114d00041b": "7c78d3be9959eb2af8fd211122c5aa5e",
".git/objects/88/a63087d843ac5c5863a83250e378287556b23c": "9bf63503e3c75ad37bbe019c2cefd240",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8645948ca1d1180097fda50913c8c57a535ced": "663cf6e9b6a20464c12ff877bec9e43b",
".git/objects/8f/7108906396a42f4de9fbcdaf28a2af0f0e8fc2": "dcce00fd93284b0959cd351e818ea4fa",
".git/objects/8f/88b551246f328dd7aca62951c0eca913af2711": "47fc58f8eddd3ae6ca5c872159649361",
".git/objects/90/9138395e9b920a7c543abcc72aa4cdd278cc72": "12302344ca4a8b253e2227c10bc99faf",
".git/objects/94/5c8af4bdeacb28f2350b4ad64ee8cd225b5e92": "e91c4ad233cc15e5ef360e6de3299d32",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/ca0424272355b364eba634eae0647aff20124f": "a75aa553325354bbcba1d3f64893c0c9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d6412ccff74182d1c701f758763ce039cb0330": "2ea8c98a5a56d79c8b2ac2d00c7fd439",
".git/objects/a8/65dc17409d852b3a201bafe4ab876b47550d1f": "08dd4a9ca09cbeda7ed6551e4f94a191",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/1de44f15d33e264326f462f02bb6491d70ffcf": "04cd49f9749d18c384b8a955257fc95d",
".git/objects/b3/9118cec4b5a51cff3a0a98fabcadec8f459cb6": "15eeb7369490842cf3673125d1c2ff06",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/e9b31b4c40171cf5df5fa1c053592d43f75659": "a06dc130d02a1bdaa2e78280262fddb7",
".git/objects/c9/0277205d95e24e6fe90fae3d1f76d053c4a38b": "b013a5944303f2ff86f776f4a7b199fe",
".git/objects/cb/8fe17321dcff0e2ffc3672261483f033036da9": "0452bb368b8dbb1507ab9a8e2337cbef",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/1bac428b84b284b1d1df1780dc9f7ad5a2f77c": "134431c2bf3ce9d7b2b0ab609e595ac0",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/cda997362224dc5ec94a3fce02b206789402fb": "29372e9b0432ad8feafc1b0bf3367ea6",
".git/objects/d8/ef6f92de467f2bc7460893246399fb7bad296b": "6996e4751b55faae67999ad5e9dd7bd0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9bdce9fa7e4b161dfd12d38886cd810a3bd256": "ce1ca1da144c93ec896b230c3b7fa537",
".git/objects/e7/2470871b8fc198da424b1e17ed729c202829cf": "b3ed1b73c1800e0aa69eca3a85175331",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/205f9bba7af02b1350007be5321a7edda47734": "122a4493ed0e1cac4ca16cc0ca104e83",
".git/objects/f5/306b2b2247de85f87c6cc9300f687fefbe1b2b": "b0fd5a92d784763848020dd8992b4b3f",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "3dc6e64d8a307d4c36a63876f9caa310",
".git/refs/heads/portfolio": "c7094eeb79991332e07329d8481be2dc",
".git/refs/remotes/origin/main": "c7094eeb79991332e07329d8481be2dc",
".git/refs/remotes/origin/portfolio": "c7094eeb79991332e07329d8481be2dc",
"assets/AssetManifest.json": "018fdb07e156637783504e471840aa9d",
"assets/assets/ajithkumar_resume.pdf": "cde2319d2fdd1b73e169f5b51430e781",
"assets/assets/font/CaesarDressing-Regular.ttf": "4afd385fc443c2fe148d201a79514185",
"assets/assets/font/Inter-VariableFont_slnt,wght.ttf": "32204736a4290ec41200abe91e5190d1",
"assets/assets/image/ajithkumar.jpg": "ea986ef0965d6d83edb0e0e73a1893ff",
"assets/assets/image/ajithkumar_01.jpg": "99e377a5aa193bdfb6e108996c0cb51a",
"assets/assets/image/claims.jpg": "d11d44643acda460158214634f1b5978",
"assets/assets/image/github_logo.png": "4c7df02459c3e2ce0be123620645702a",
"assets/assets/image/linkedin_logo.png": "15dcb9dec8ca62c9ba5347278b15663a",
"assets/assets/image/lovelocal.jpg": "7be4e988095d4f63b0b949e9e5ccc741",
"assets/assets/image/paint.png": "f21fd34fbc511af8512c25551df3259e",
"assets/assets/image/toto_2.jpg": "b3203000e9c205c8a253075f653a5fc7",
"assets/assets/image/toto_pic_01.jpg": "6101d71583479446c7ba9798f9fd2795",
"assets/assets/image/vojvoj.jpg": "2fe0286699d77931c93896c9c805943e",
"assets/assets/image/whatsapp_logo.png": "4b27d33a126b9078ff0843d7868a180f",
"assets/assets/json/blast.json": "1808204e27a90a6e34ad41257c316345",
"assets/assets/json/celebration.json": "5cc9515563136bdecafbbaf92d193172",
"assets/assets/json/download.json": "332be1fcd3d9a8ad6eb90450ae94e93d",
"assets/assets/json/man.json": "0ca30bb038076956c720de0b6e978da6",
"assets/assets/json/man_01.json": "11c1b4ac2be8546d3184c5748627865f",
"assets/assets/json/man_02.json": "820fe3f1820431901ca5a62d9c276e00",
"assets/assets/json/path.json": "ec665de175a8558aa1b99f71496aff76",
"assets/assets/json/planet.json": "62ec232f5a388bc64f5716ee1587db47",
"assets/assets/json/wave.json": "db22a7a76cf9375a9796f0dd244de0e9",
"assets/assets/json/wiggly_words.json": "3a1c0095d090d39c079b493b92f2bb07",
"assets/FontManifest.json": "bfb31e9d0517684d22380dfdd71f56ca",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "13e4ade48fb3b4c0f650a0ca6b63657c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ebfeddcd6e2037ef1b36e40ae8e04b2",
"/": "6ebfeddcd6e2037ef1b36e40ae8e04b2",
"main.dart.js": "f5d64cc6b4a49785daf8de6c6cb8a3b2",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
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
