Build and install in sub folder on server:
==========================================
npm run build
rsync -av --delete --exclude='store/' dist/ tps@linode2.netmaster.dk:/var/www/www.netmaster.dk/htdocs

Use github official CLI to create public repo on github based on local code:
============================================================================
https://github.com/cli/cli/blob/trunk/docs/install_linux.md

Booking Data:
=============
Ændre booking liste. Fra linode /home/tps udføres `sudo nano /var/www/www.netmaster.dk/htdocs/store/BerlinBooking.json`
