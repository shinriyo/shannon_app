# -*- coding: utf-8 -*-
from django.template import RequestContext, Context
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_protect


@csrf_protect
def root(request):
    ctxt = RequestContext(request, {})
    return render_to_response("index.html", ctxt)

@csrf_protect
def search(request):
    if "keyword" in request.POST:
        keyword = request.POST["keyword"]
    else:
        keyword = ""
    ctxt = RequestContext(request, {
        "keyword": keyword
    })
    return render_to_response("search.html", ctxt)
