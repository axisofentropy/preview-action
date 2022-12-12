import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'

async function run(): Promise<void> {
  try {

    // Action Inputs
    const composeFileCacheKey: string = core.getInput('compose-file-cache-key')
    const composeFileCachePath: string = core.getInput('compose-file-cache-path')
    const username: string = core.getInput('username')
    const server: string = core.getInput('server')
    const project: string = core.getInput('project')
    const prNumber: string = core.getInput('pr-number')
    const gitRef: string = core.getInput('git-ref')
    const healthceckUrlPath: string = core.getInput('healthcheck-url-path')

    // Action Secrets
    const password: string = core.getInput('password')
    const urlUsername: string = core.getInput('url-username')
    const urlPassword: string = core.getInput('url-password')
    const personalAccessToken: string = core.getInput('personal-access-token')
    const dockerhubUsername: string = core.getInput('dockerhub-username')
    const dockerhubPassword: string = core.getInput('dockerhub-password')
    const acrUsername: string = core.getInput('acr-username')
    const acrPassword: string = core.getInput('acr-password')
    const acrRegistryUrl: string = core.getInput('acr-registry-url')
    const awsAccessKeyId: string = core.getInput('aws-access-key-id')
    const awsSecretAccessKey: string = core.getInput('aws-secret-access-key')
    const awsRegistryUrl: string = core.getInput('aws-registry-url')
    const gcloudServiceKey: string = core.getInput('gcloud-service-key')
    const dockerRegistryUsername: string = core.getInput('docker-registry-username')
    const dockerRegistryPassword: string = core.getInput('docker-registry-password')

    console.log('Hello ' + username)

    console.log('Hello World!')

    console.log(github.context)

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
