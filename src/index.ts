import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'

async function run(): Promise<void> {
  try {
    const composeFileCacheKey: string = core.getInput('compose-file-cache-key')
    const composeFileCachePath: string = core.getInput('compose-file-cache-path')
    const username: string = core.getInput('username')
    const server: string = core.getInput('server')

    console.log('Hello ' + username)

    console.log('Hello World!')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
