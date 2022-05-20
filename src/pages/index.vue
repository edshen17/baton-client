  <template>
    <main class="text-lg">
      <section class="pt-8 pb-5 md:py-20">
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4 pb-2">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1605116959031-6e2d13a2ee56?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
              >
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8 pb-3">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                  Track your media consumption.
                </h3>
                <p class="mt-4 text-lg leading-relaxed">
                  Have you ever wondered what kind of media you're consuming every day? With Reader you can:
                </p>
                <ul class="list-none mt-4">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i class="fas fa-fingerprint" /></span>
                      </div>
                      <div>
                        <h4>
                          track what you read, watch, or listen
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i class="fab fa-html5" /></span>
                      </div>
                      <div>
                        <h4>
                          analyze and categorize your media consumption
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="pt-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i class="far fa-paper-plane" /></span>
                      </div>
                      <div>
                        <h4>
                          get recommendations based on your preferences
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-0 md:pt-20 md:pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center md:text-center mb-24">
            <div class="w-full lg:w-7/12 px-4">
              <h2 class="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                How much can you track?
              </h2>
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded mt-8 mb-6" @click="$router.push('signup')">
                Join Us
              </button>
              <div class="text-center">...or
                <RouterLink to="/login" class="underline">
                  sign in
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>

  <route lang="yaml">
  meta:
    layout: default
  </route>
