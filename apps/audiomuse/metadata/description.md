![Media Server Support: Jellyfin 10.11.3, Navidrome 0.58.0, LMS v3.69.0, Lyrion 9.0.2, Emby 4.9.1.80](https://img.shields.io/badge/Media%20Server-Jellyfin%2010.11.3%2C%20Navidrome%200.58.0%2C%20LMS%20v3.69.0%2C%20Lyrion%209.0.2%2C%20Emby%204.9.1.80-blue?style=flat-square&logo=server&logoColor=white)


# **AudioMuse-AI - Where Music Takes Shape** 

AudioMuse-AI is an open-source, Dockerized environment that brings **automatic playlist generation** to your self-hosted music library. Using tools such as [Librosa](https://github.com/librosa/librosa) and [ONNX](https://onnx.ai/), it performs **sonic analysis** on your audio files locally, allowing you to curate playlists for any mood or occasion without relying on external APIs.

It integrates with the main music servers' APIs such as :
 - [Jellyfin](https://jellyfin.org) *10.11.3*
 - [Navidrome](https://www.navidrome.org/) 0.58.0*
 - [LMS](https://github.com/epoupon/lms/tree/master) *v3.69.0*
 - [Lyrion](https://lyrion.org/) *9.0.2*
 - [Emby](https://emby.media) *4.9.1.80*

AudioMuse-AI lets you explore your music library in innovative ways, just **start with an initial analysis**, and you’ll unlock features like:
* **Clustering**: Automatically groups sonically similar songs, creating genre-defying playlists based on the music's actual sound.
* **Instant Playlists**: Simply tell the AI what you want to hear—like "high-tempo, low-energy music" and it will instantly generate a playlist for you.
* **Music Map**: Discover your music collection visually with a vibrant, genre-based 2D map.
* **Playlist from Similar Songs**: Pick a track you love, and AudioMuse-AI will find all the songs in your library that share its sonic signature, creating a new discovery playlist.
* **Song Paths**: Create a seamless listening journey between two songs. AudioMuse-AI finds the perfect tracks to bridge the sonic gap.
* **Sonic Fingerprint**: Generates playlists based on your listening habits, finding tracks similar to what you've been playing most often.
* **Song Alchemy**: Mix your ideal vibe, mark tracks as "ADD" or "SUBTRACT" to get a curated playlist and a 2D preview. Export the final selection directly to your media server.
* **Text Search**: search your song with simple text that can contains mood, instruments and genre like calm piano songs.


**The full list or AudioMuse-AI related repository are:** 
  > * [AudioMuse-AI](https://github.com/NeptuneHub/AudioMuse-AI): the core application, it run Flask and Worker containers to actually run all the feature;
  > * [AudioMuse-AI Helm Chart](https://github.com/NeptuneHub/AudioMuse-AI-helm): helm chart for easy installation on Kubernetes;
  > * [AudioMuse-AI Plugin for Jellyfin](https://github.com/NeptuneHub/audiomuse-ai-plugin): Jellyfin Plugin;
  > * [AudioMuse-AI Plugin for Navidrome](https://github.com/NeptuneHub/AudioMuse-AI-NV-plugin): Navidrome Plugin;
  > * [AudioMuse-AI MusicServer](https://github.com/NeptuneHub/AudioMuse-AI-MusicServer): Open Subosnic like Music Sever with integrated sonic functionality.

## Disclaimer

**Important:** Despite the similar name, this project (**AudioMuse-AI**) is an independent, community-driven effort. It has no official connection to the website audiomuse.ai.

We are **not affiliated with, endorsed by, or sponsored by** the owners of `audiomuse.ai`.

## **Table of Contents**

- [Quick Start Deployment](#quick-start-deployment)
- [Hardware Requirements](#hardware-requirements)
- [Docker Image Tagging Strategy](#docker-image-tagging-strategy)
- [Key Technologies](#key-technologies)
- [How To Contribute](#how-to-contribute)

## Quick Start Deployment

Get AudioMuse-AI running in minutes with Docker Compose. 

If you need more deployment example take a look at [DEPLOYMENT](docs/DEPLOYMENT.md) page.

For a full list of configuration parameter take a look at [PARAMETERS](docs/PARAMETERS.md) page.

For the architecture design of AudioMuse-AI, take a look to the [ARCHITECTURE](docs/ARCHITECTURE.md) page.

**Prerequisites:**
* A running media server (Jellyfin, Navidrome, Lyrion, or Emby)
* See [Hardware Requirements](#hardware-requirements)

**Run your first analysis:**
   - Navigate to "Analysis and Clustering" page
   - Click "Start Analysis" to scan your library
   - Wait for completion, then explore features like clustering and music map

## **Hardware Requirements**

AudioMuse-AI has been tested on:
* **Intel**: HP Mini PC with Intel i5-6500, 16 GB RAM and NVMe SSD
* **ARM**: Raspberry Pi 5, 8 GB RAM and NVMe SSD / Mac Mini M4 16GB / Amphere based VM with 4core 8GB ram

Suggested requirements:
* CPU: 4-core Intel with AVX2 support (usually produced in 2015 or later) or ARM
* 8 GB RAM
* NVME SSD storage

You can check the [Tested Hardware and Configuration](docs/HARDWARE.md) notes to see which hardware has already been validated.

For more information about the GPU deployment requirements have a look to the [GPU](docs/GPU.md) page.

## **Docker Image Tagging Strategy**

Our GitHub Actions workflow automatically builds and publishes Docker images with the following tags:

* **`:latest`**
  Stable build from the **main** branch.
  **Recommended for most users.**

* **`:devel`**
  Development build from the **devel** branch.
  May be unstable — **for testing and development only.**

* **`:vX.Y.Z`** (e.g. `:v1.0.0`, `:v0.1.4-alpha`)
  Immutable images built from **Git release tags**.
  **Ideal for reproducible or pinned deployments.**

* **`-noavx2`** variants
  Experimental images for CPUs **without AVX2 support**, using legacy dependencies.
  **Not recommended** unless required for compatibility.

* **`-nvidia`** variants
  Images that support the use of GPU for both Analysis and Clustering.
  **Not recommended** for old GPU.


## **Key Technologies**

AudioMuse AI is built upon a robust stack of open-source technologies:

* [**Flask:**](https://flask.palletsprojects.com/) Provides the lightweight web interface for user interaction and API endpoints.  
* [**Redis Queue (RQ):**](https://redis.io/glossary/redis-queue/) A simple Python library for queueing jobs and processing them in the background with Redis.
* [**Supervisord:**](https://supervisord.org/) Supervisor is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems.
* [**Essentia-tensorflow**](https://essentia.upf.edu/) An open-source library for audio analysis, feature extraction, and music information retrieval. (used only until version v0.5.0-beta)
* [**MusicNN Tensorflow Audio Models from Essentia**](https://essentia.upf.edu/models.html) Leverages pre-trained MusicNN models for feature extraction and prediction. More details and models.
* [**Librosa**](https://github.com/librosa/librosa) Library for audio analysis, feature extraction, and music information retrieval. (used from version v0.6.0-beta)
* [**CLAP (Contrastive Language-Audio Pretraining)**](https://github.com/LAION-AI/CLAP) Neural network for audio-text matching, enabling natural language music search and text-based playlist generation.
* [**ONNX**](https://onnx.ai/) Open Neural Network Exchange format and [ONNX Runtime](https://onnxruntime.ai/) for fast, portable, cross-platform model inference. **(Used from v0.7.0-beta, replaces TensorFlow)**
* [**Tensorflow**](https://www.tensorflow.org/) Platform developed by Google for building, training, and deploying machine learning and deep learning models. **(Used only in versions before v0.7.0-beta)**
* [**scikit-learn**](https://scikit-learn.org/) Utilized for machine learning algorithms:
* [**voyager**](https://github.com/spotify/voyager) Approximate Nearest Neighbors used for the /similarity interface. Used from v0.6.3-beta
* [**PostgreSQL:**](https://www.postgresql.org/) A powerful, open-source relational database used for persisting:  
* [**Ollama**](https://ollama.com/) Enables self-hosting of various open-source Large Language Models (LLMs) for tasks like intelligent playlist naming.
* [**Docker / OCI-compatible Containers**](https://www.docker.com/) – The entire application is packaged as a container, ensuring consistent and portable deployment across environments.

## **How To Contribute**

Contributions, issues, and feature requests are welcome\!  

For more details on how to contribute please follow the [Contributing Guidelines](https://github.com/NeptuneHub/AudioMuse-AI/blob/main/CONTRIBUTING.md)
