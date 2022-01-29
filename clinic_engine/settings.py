"""
Django settings for clinic_engine project.

Generated by 'django-admin startproject' using Django 3.2.11.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""
from configparser import ConfigParser
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
from corsheaders.defaults import default_methods, default_headers

BASE_DIR = Path(__file__).resolve().parent.parent
PROJECT_NAME = BASE_DIR.name
config_name = Path(f'system.conf')
config_path = Path(f'/etc/{PROJECT_NAME}') / config_name
if not config_path.exists():
    config_path = config_name

SYSTEM_CONFIG = ConfigParser()
SYSTEM_CONFIG.read(config_path)

# expose configuration globally
DATABASE_CONFIG = SYSTEM_CONFIG['database']
DJANGO_CONFIG = SYSTEM_CONFIG['django']

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure--#(_pwy+d!n_#=bboq#1&&vm5nf-23mi@=oy)r_rf%6mm8wqs5'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = eval(DJANGO_CONFIG['debug'])
ALLOWED_HOSTS = DJANGO_CONFIG['allowed_hosts'].replace(' ', '').split(',')

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework.authtoken',
    'rest_framework',
    'django_filters',
    'corsheaders',
    'core',
    'clinic'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'clinic_engine.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'clinic_engine.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': DATABASE_CONFIG.get('name', PROJECT_NAME),
        'USER': DATABASE_CONFIG.get('user', 'postgres'),
        'PASSWORD': DATABASE_CONFIG.get('pass', ''),
        'HOST': DATABASE_CONFIG.get('host', 'database')
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'

MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'
for folder in [STATIC_ROOT, MEDIA_ROOT]:
    folder.mkdir(exist_ok=True, parents=True)
# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# API client configuration(React/Angular)
CORS_ALLOWED_ORIGINS = DJANGO_CONFIG['cors_allowed_origin'].replace(' ', '').split(',')
CORS_ALLOW_METHODS = list(default_methods)
CORS_ALLOW_HEADERS = list(default_headers) + ['range', 'x-total-count', 'access-control-allow-origin']
CORS_EXPOSE_HEADERS = list(default_headers) + ['range', 'x-total-count', 'content-range']
CORS_ALLOW_CREDENTIALS = True
CORS_REPLACE_HTTPS_REFERER = True
CSRF_TRUSTED_ORIGINS = DJANGO_CONFIG['csrf_trusted_origins'].replace(' ', '').split(',')

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.OrderingFilter',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.FileUploadParser',
    ],
}
