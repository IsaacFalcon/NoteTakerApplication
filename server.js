const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

const setNotes = require('./db/db.json');