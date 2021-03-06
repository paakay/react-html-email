import expect, { spyOn } from 'expect'
import injectReactEmailAttributes from '../src/injectReactEmailAttributes'
import renderEmail from '../src/renderEmail'
import kitchenSink from '../examples/kitchenSink'
import React from 'react'
import { A } from '../src/index'

describe('renderEmail', () => {
  before(() => {
    injectReactEmailAttributes()
  })

  it('produces expected output from a kitchen sink example', () => {
    const actualOutput = renderEmail(kitchenSink)
    const expectedOutput = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Test Email</title><style type="text/css">@media only screen and (max-device-width: 480px) {\n  font-size: 20px !important;\n}</style></head><body style="width:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><table width="100%" height="100%" cellpadding="0" cellspacing="0" align="left" valign="top"><tbody><tr><td align="center" valign="top"><table width="600" align="center" cellpadding="0" cellspacing="0" valign="top"><tbody><tr><td><span style="font-family:sans-serif;font-size:15px;line-height:15px;color:#000;">Hello, world!</span></td></tr><tr><td><table cellspacing="20" width="100%" style="border-top:3px solid black;" cellpadding="0" align="left" valign="top"><tbody><tr><td><span style="font-family:sans-serif;font-size:14px;line-height:20px;color:gray;">Generated by <a href="https://github.com/chromakode/react-html-email" target="_blank" style="text-decoration:underline;">react-html-email</a></span><img data-mc-bar="bar" data-mc-baz="baz" alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/100px-React.js_logo.svg.png" width="100" height="100" style="display:block;outline:none;border:none;text-decoration:none;"/></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>'
    expect(actualOutput).toBe(expectedOutput)
  })

  it('warns on usage of an unsupported property', () => {
    const spy = spyOn(console, 'error')
    renderEmail(<A href="#test" style={{ listStylePosition: 'inside' }} />)
    spy.restore()
    expect(spy).toHaveBeenCalledWith('Warning: Failed propType: Style property `list-style-position` supplied to `A` unsupported in: outlook, outlook-web.')
  })
})
