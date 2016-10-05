//
//  SocialSharingTwitter.h
//  
//
//  Created by John Weaver on 09/26/2016.
//
//

#import <Cordova/CDVPlugin.h>

@interface GPUVideo : CDVPlugin < UINavigationControllerDelegate, UIScrollViewDelegate>

@property (copy)   NSString* callbackId;

- (void)playVideo:(CDVInvokedUrlCommand *)command;

@end
