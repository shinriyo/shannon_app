# -*- coding: utf-8 -*-
from django.template import RequestContext, Context
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_protect
from django.db import models
from tok.models import Dictionary


def root(request):
    ctxt = RequestContext(request, {})
    return render_to_response("index.html", ctxt)


def search(request):
    if "keyword" in request.POST:
        keyword = request.POST["keyword"]

        # TODO:
        dst = keyword.replace(u'　', ' ')
        dictionary = Dictionary()
        splited = dst.split(' ')
        if len(splited) >= 2:
            dictionary.key = splited[0]
            dictionary.name = splited[1]
            dictionary.save()
    else:
        keyword = ""
    ctxt = RequestContext(request, {
        "keyword": keyword
    })
    return render_to_response("search.html", ctxt)


@csrf_protect
def search_dec(request):
    if "keyword" in request.POST:
        keyword = request.POST["keyword"]
    else:
        keyword = ""
    ctxt = RequestContext(request, {
        "keyword": keyword
    })
    return render_to_response("search.html", ctxt)
