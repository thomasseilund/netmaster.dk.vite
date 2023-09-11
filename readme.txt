Build and install in sub folder on server:
==========================================
npm run build ; \
rsync -avz dist/ linode2.netmaster.dk:/home/tps/testspottps/netmaster.dk.vite


Use github official CLI to create public repo on github based on local code:
============================================================================
https://github.com/cli/cli/blob/trunk/docs/install_linux.md

Build for test or prod:
=======================

Booking Data:
=============
Ændre booking liste. Fra linode /home/tps udføres `sudo nano /var/www/www.netmaster.dk/htdocs/store/BerlinBooking.json`
