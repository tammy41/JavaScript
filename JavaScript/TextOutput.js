// JavaScript Document
  dynamicanimAttr = "UpDownWord"
  MoveElements = new Array()
  currentElement = 0
  steps = 8
  step = 0
  outString = ""

  function UpDownText()  {
    for (index=document.all.length-1; index >= document.body.sourceIndex; index--)
    {
      el = document.all[index]
      UDText = el.getAttribute(dynamicanimAttr, false)
      if(null != UDText)      {
          ih = el.innerHTML
          outString = ""
          i1 = 0
          iend = ih.length
          while(true)          {
            i2 = startWord(ih, i1)
            if(i2 == -1)
              i2 = iend
            outWord(ih, i1, i2, false, "")
            if(i2 == iend)
              break
            i1 = i2
            i2 = endWord(ih, i1)
            if(i2 == -1)
              i2 = iend
            outWord(ih, i1, i2, true, UDText)
            if(i2 == iend)
              break
            i1 = i2
          document.all[index].innerHTML = outString
          document.all[index].style.posLeft = 0
          document.all[index].setAttribute(dynamicanimAttr, null)
        }
       }
    }
    i = 0
    for (index=document.body.sourceIndex; index < document.all.length; index++)    {
      el = document.all[index]
      UDText = el.getAttribute(dynamicanimAttr, false)
      if (null != UDText)      {  
        el.style.posLeft = 0
        el.style.posTop = document.body.scrollTop-offsetTop(el)-el.offsetHeight       
        el.initLeft = el.style.posLeft
        el.initTop = el.style.posTop
        MoveElements[i++] = el
      }
    }
    window.setTimeout("Move();", 0)
  }

 function Move()  {
    el = MoveElements[currentElement]
    UDText = el.getAttribute(dynamicanimAttr, false)
    step++ 
    steps = 12     
    dl = el.initLeft / steps
    dt = el.initTop  / steps
    el.style.posLeft = el.style.posLeft - dl
    el.style.posTop = el.style.posTop - dt   
    if (step >= steps)     {
      el.style.posLeft = 0
      el.style.posTop = 0
      currentElement++
      step = 0    }
    if(currentElement < MoveElements.length)
      window.setTimeout("Move();", 0)
  }
   
  function startWord(ih, i)  {
    for(tag = false; i < ih.length; i++)
    {
      c = ih.charAt(i)
      if(c == '<')
        tag = true
      if(!tag)
        return i
      if(c == '>')
        tag = false
    }
    return -1
  }

  function endWord(ih, i)  {
    nonSpace = false
    space = false
    while(i < ih.length)
    {
      c = ih.charAt(i)
      if(c != ' ')
        nonSpace = true
      if(nonSpace && c == ' ')
        space = true
      if(c == '<')
        return i
      if(space && c != ' ')
        return i
      i++
    }
    return -1
  }

  function outWord(ih, i1, i2, dyn, anim)  {
    if(dyn)
      outString += "<SPAN " + dynamicanimAttr + "=\"" + anim + "\" style=\"position: relative; left: 10000;\">"
    outString += ih.substring(i1, i2)
    if(dyn)
      outString += "</SPAN>"
  }

 function offsetTop(el)  {
    y = el.offsetTop
    for (e = el.offsetParent; e; e = e.offsetParent)
      y += e.offsetTop;
    return y
  }