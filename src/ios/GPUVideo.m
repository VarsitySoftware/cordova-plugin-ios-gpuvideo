//
//  SocialSharingTwitter.m
//
//  Created by John Weaver on 09/26/2016
//
//

#import "GPUVideo.h"
#import <Accounts/Accounts.h>

@implementation GPUVideo 

@synthesize callbackId;

- (void) playVideo:(CDVInvokedUrlCommand *)command {
    
    NSDictionary *options = [command.arguments objectAtIndex: 0];
  
	NSString * strFileURL = [options objectForKey:@"fileURL"];
	
    self.callbackId = command.callbackId;

	NSLog(@"GPUVIDEO BABY!!!!");    

	CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
	[self.commandDelegate sendPluginResult:result callbackId:self.callbackId];	
    
}
@end
