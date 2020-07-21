# term tree

Simple self-hosted front page for a browser. Originally by [nytly](https://notabug.org/nytly/home).

![Demo Image](/images/tree_home.jpg)



# Setup

 Using Docker we can set this static page up very quickly. This guide expects you have Docker and Docker Compose installed on a Linux machine.

1. Install git and wget:

```bash
sudo apt update
sudo apt install git
sudo apt install wget
```

2. Make a folder for the Docker container and site to live in:

```bash
sudo mkdir /opt/http-frontpage
cd /opt/http-frontpage
```

3. Clone the repo

```bash
sudo git clone https://github.com/MaxVRAM/homeFork.git
```

4. Enter the homeFork directory and run docker-compose and edit the docker-compose.yml:

```bash
cd homeFork
sudo nano docker-compose.yml
```

5. All you should need to change is the port number if you want the site on a different port than 8080:

_For example: to change it to 7000:_

> 7000:8080

6. Save and exit nano, then run docker-compose. This will build the http-server Docker image and spin up the container:

```bash
docker-compose up -d
```

7. Open the port on your firewall. I'm using _ufw_:

```bash
sudo ufw allow 7000
```

8. Now access the site on your local network within your browser using the IP of the machine and port number:

_On the local host:_

> http://127.0.0.1:7000



# Customisation

- You can edit the links on the page by editing the file `site/script/script.js`.
- Colours can be changed by editing `site/css/style.css`.
- The search engine used can be changed in the `site/index.html` file.

# Homepage Setup

You can now use this site as your homepage on any machines on your local network by simply adding the address you tested above in your browser settings.

If you want to remotely host this, you'll need to have a DNS pointing to your network and then set up a reverse proxy (like Nginx) to route the domain to the correct local IP and port.
