<template>
  <div class="q-pa-md">
    <div
      v-if="isLoadingReplicant"
      class="flex items-center"
    >
      <q-spinner
        size="20px"
        color="info"
        class="q-mr-sm"
      />
    </div>

    <div
      v-else-if="isError"
      class="text-negative"
    >
      Error loading replicant
    </div>
    <div class="q-py-md text-h5">
      <q-icon
        name="arrow_back"
        size="35px"
        class="q-mr-sm cursor-pointer"
        @click="$router.back()"
      />
      Dashboard <b>{{ replicant?.name || '...' }}</b>
    </div>
    <div v-if="replicant?.id">

      <q-btn
        @click="$router.push(replicantId + '/interview')"
        color="primary"
        label="Interview"
        icon="mic"
      />
      <q-btn
        @click="$router.push(replicantId + '/chats')"
        color="primary"
        label="Chat"
        icon="chat"
        class ="q-ml-md"
      />
      <q-btn
        @click="$router.push(replicantId + '/user-cards')"
        color="primary"
        label="User Cards"
        icon="person"
        class="q-ml-md"
      />

      <div class="q-mt-md">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              <q-icon
                size="lg"
                color="positive"
                name="insights"
              /> Complete Summary of All Topics
            </div>
            <div class=" text-justify">
              This is a detailed summary that includes information from each topic gathered during the interview.
              Each topic is analyzed and processed individually, and then their data is aggregated into a unified,
              structured summary that reflects the complete personality in the context of various subjects (e.g., close
              relationships, religion, politics, and others).
              This is not just brief excerpts, but a detailed concatenation of all topic summaries,
              representing the full picture of a person's views, values, and characteristics.
            </div>
            <q-separator class="q-my-md" />
            <div class="text-justify">
              Whenever you add new interviews, adjust system settings, switch to a different model, or modify the prompt
              structure — you must update this snapshot.
              This ensures the personality profile remains accurate and fully aligned with the latest data and
              configuration.
              Without updating, the replicant might rely on outdated summaries that no longer reflect the current state
              of the personality model.
              Keeping the snapshot current is essential for maintaining consistency, emotional nuance, and authentic
              behavior in generated responses.
            </div>

            <q-separator class="q-my-md" />
            <div class="text-justify">
              <b>IMPORTANT:</b> If you have updated the Complete Summary of All Topics after changing prompts or models,
              there's no need to update the Holistic Personality Portrait!
              It makes sense to trigger an update only when the prompts used to generate the portrait have been changed.
            </div>

          </q-card-section>
          <q-btn
            color="primary"
            :label="interview?.summary?.length ? 'Refresh topics snapshot' : 'Create topics snapshot'"
            icon="refresh"
            class="q-ma-md"
            dense
            @click.stop="refreshInterviewSnapshot(replicantId, 'deepRefreshInterviewSnapshot')"
            :loading="systemInfo?.inProcessingRefreshSnapshot?.includes(replicantId)"
          />
        </q-card>

        <q-list
          bordered
          class="rounded-borders"
          style="width: 100%; margin: 0 auto"
        >
          <q-expansion-item
            expand-separator
            icon="insights"
          >
            <template v-slot:header>
              <div
                class="row items-center justify-between q-gutter-sm"
                style="width: 100%"
              >
                <div class="row items-center q-gutter-sm">
                  <q-icon
                    name="insights"
                    size="lg"
                  />
                  <div>
                    <div class="text-subtitle1"></div>
                    <div class="text-caption">
                      Length: {{ Number(interview?.summary?.length || 0).toLocaleString() }} chars
                    </div>
                  </div>
                </div>
                <!-- <q-btn flat dense icon="start" color="positive" :title="'Switch to topic'" /> -->
              </div>
            </template>

            <q-card>
              <div class="q-ma-md">
                <Markdown :source="interview?.summary || 'not created'" />
              </div>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>

      <div class="q-mt-md">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              <q-icon
                size="md"
                color="info"
                name="psychology"
              /> Holistic Personality Portrait
            </div>
            <div class=" text-justify">
              The Holistic Personality Portrait is built from the complete summary of all topics,
              providing an integrated view of personal beliefs, values, and emotions.
              It is more compact than the Complete Summary of All Topics but focuses on key data to avoid "blurring" the
              focus
              and improve response accuracy.
              The portrait takes into account events mentioned in interviews, causal relationships between them, and
              preserves
              speech patterns, which helps in understanding motivations and behavior.
              This portrait serves to accurately emulate a replicant or digital twin.
            </div>
            <q-separator class="q-my-md" />
            <div class="text-justify">
              Whenever you add new interviews, adjust system settings, switch to a different model, or modify the prompt
              structure — you must update this snapshot.
              This ensures the personality profile remains accurate and fully aligned with the latest data and
              configuration.
              Without updating, the replicant might rely on outdated summaries that no longer reflect the current state
              of the personality model.
              Keeping the snapshot current is essential for maintaining consistency, emotional nuance, and authentic
              behavior in generated responses.
            </div>

            <q-separator class="q-my-md" />
            <div class="text-justify">
              <b>IMPORTANT:</b>
              If you have updated the Complete Summary of All Topics after changing prompts or models,
              there's no need to update the Holistic Personality Portrait!
              It makes sense to trigger an update only when the prompts used to generate the portrait have been changed.
            </div>

          </q-card-section>
          <q-btn
            color="primary"
            :label="interview?.summary?.length ? 'Refresh portrait' : 'Create portrait'"
            icon="refresh"
            class="q-ma-md"
            dense
            @click.stop="refreshInterviewSnapshot(replicantId, 'refreshPortrait')"
            :loading="systemInfo?.inProcessingRefreshSnapshot?.includes(replicantId)"
          />
        </q-card>

        <q-list
          bordered
          class="rounded-borders"
          style="width: 100%; margin: 0 auto"
        >
          <q-expansion-item
            expand-separator
            icon="summarize"
          >
            <template v-slot:header>
              <div
                class="row items-center justify-between q-gutter-sm"
                style="width: 100%"
              >
                <div class="row items-center q-gutter-sm">
                  <q-icon
                    name="psychology"
                    size="md"
                  />
                  <div>
                    <div class="text-subtitle1"></div>
                    <div class="text-caption">
                      Length: {{ Number(replicant?.snapshot?.length || 0).toLocaleString() }} chars
                    </div>
                  </div>
                </div>
                <!-- <q-btn flat dense icon="start" color="positive" :title="'Switch to topic'" /> -->
              </div>
            </template>

            <q-card>
              <div class="q-ma-md">
                <Markdown :source="replicant?.snapshot || 'not created'" />
              </div>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'
import useReplicant from '../api/queries/use-replicant'
import useReplicantInterview from 'src/api/queries/use-replicant-interview'
import { Notify } from 'quasar'
import { frontClient } from 'src/api/frontClient'
import useGetInfo from 'src/api/queries/use-get-info'

const { data: systemInfo } = useGetInfo()

const route = useRoute()
const replicantId = computed(() => Number(route.params.id))

const { data: replicant, isLoading: isLoadingReplicant, isError } = useReplicant(replicantId)
const { data: interview } = useReplicantInterview(replicantId)

const refreshInterviewSnapshot = (id: number, method: 'refreshPortrait' | 'deepRefreshInterviewSnapshot') => {
  frontClient.interview[method].mutate({ repId: id }).then((res) => {
    Notify.create({ message: res.message, color: res.success ? 'positive' : 'negative' })
  }).catch(err => {
    console.error('Update model error:', err)
    Notify.create({ message: 'Error update replicant model', color: 'negative' })
  })
}

</script>